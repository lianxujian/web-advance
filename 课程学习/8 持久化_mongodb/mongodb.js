//客户端
const MongoClient = require('mongodb').MongoClient;

//连接url
const url = "mongodb://localhost:27017"; //mongodb://user:password@localhost:27017

//数据库名
const dbname = 'test';

(async function() {
    //0、创建客户端 
    const client = new MongoClient(url, { useNewUrlParser: true });
    try {
        //1连接数据库，返回Promise
        await client.connect();
        console.log('连接成功')

        //2获取数据库
        const db = client.db(dbname)

        //3获取集合
        const fruitsColl = db.collection("fruits");

        //4插入文档，返回Promise<CommentResult>
        //let r = await fruitsColl.insertOne({ name: '芒果', price: 15 });
        // console.log('插入成功', r.result);

        // //5查询文档
        // r = await fruitsColl.findOne();
        // console.log('查询结果', r)

        // //6更新文档，返回Promise<CommentResult>
        // r = await fruitsColl.updateOne({ name: '芒果' }, { $set: { name: '苹果' } });
        // console.log('更新成功', r.result);

        // //7删除文档
        // r = await fruitsColl.deleteOne({ name: '苹果' });
        // console.log('删除成功', r.result);

        //let r = await fruitsColl.findOne({ price: { $gte: 20 } }); //大于等于
        //$or: [{ price: { $gte: 20 } }, { price: { $lte: 10 } }]
        //$and: [{ price: { $gte: 10 } }, { price: { $lte: 20 } }]
        //price($gte:10,$lte:20)
        //name:{$regex:/果/}
        //console.log(r)

        //地理定位(查询1公里以内地铁站)
        // const stations = db.collection('stations');
        // // await stations.insertMany([
        // //     { name: '天安门东', loc: [116.407851, 39.91408] },
        // //     { name: '天安门西', loc: [116.398056, 39.913723] },
        // //     { name: '王府井', loc: [116.417809, 39.91435] }
        // // ]);
        // await stations.createIndex({ loc: '2dsphere' })
        // r = await stations.find({
        //     loc: {
        //         $nearSphere: {
        //             $geometry: {
        //                 type: 'Point',
        //                 coordinates: [116.403847, 39.915526]
        //             },
        //             $maxDistance: 1000
        //         }
        //     }
        // }).toArray();
        // console.log('天安门附近地铁站:', r)

        //聚合
        let r = await fruitsColl.aggregate([
            { $match: { name: '芒果' } },
            { $group: { _id: '$name', total: { $sum: '$price' } } }
        ]).toArray();
        console.log(r)

    } catch (error) {
        console.error(error)
    }
    client.close();

}())
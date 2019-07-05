const mongodb = require('./db');

mongodb.once('connect', async() => {
    const col = mongodb.col('fruits');
    try {
        //删除已存在
        await col.deleteMany();

        //插入测试数据
        await col.insertMany([
            { name: '苹果', price: 5, category: '水果' },
            { name: '香蕉', price: 5, category: '水果' },
            { name: '梨', price: 5, category: '水果' },
            { name: '草莓', price: 5, category: '水果', stock: 100 },
            { name: '西红柿', price: 5, category: '蔬菜', stock: 100 },
            { name: '黄瓜', price: 5, category: '蔬菜' },
            { name: '豆角', price: 5, category: '蔬菜' },
            { name: '土豆', price: 5, category: '蔬菜' },
        ])

        let r = await col.findOne();
        console.log('查询结果', r)
    } catch (error) {
        console.error(error);
    }
})
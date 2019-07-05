const mongo = require('./models/db');
const testData = require('./models/testdata');

const path = require('path');
const express = require('express');
const app = express();

app.get('/fruit-market', (req, res) => {
    res.sendFile(path.resolve('./fruit-market.html'));
})

//分页查询果蔬数据
app.get('/api/list', async(req, res) => {
        //分页数据
        const { page, category } = req.query; //api/list?page=3
        //查询
        try {
            //构造条件
            const condition = {};
            if (category) {
                condition.category = category;
            }
            const col = mongo.col('fruits');
            const fruits = await col.find(condition).skip((page - 1) * 4).limit(4).toArray();
            const total = await col.find().count();

            res.json({ ok: 1, data: { fruits, pagination: { total, page } } });
        } catch (error) {}
    })
    //分类
app.get('/api/category', async(req, res) => {
    const col = mongo.col('fruits');
    const data = await col.distinct('category');
    res.json({ ok: 1, data })
})
app.listen(3000);
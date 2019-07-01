const Sequelize = require("sequelize");

// 建立连接
const sequelize = new Sequelize("test", "root", "root", {
    host: "localhost",
    dialect: "mysql", // mysql/postgre/sql server/sql lite
    operatorsAliases: false,//操作符
    dialectOptions: {
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    define: {
        'underscored': true,
        'charset':'utf8mb4'
    }
});

// 1.定义模型 Model - Table
const Fruit = sequelize.define(
    "fruit",
    {
        name: {
            type: Sequelize.STRING(100),
            get() {
                const name = this.getDataValue("name");
                const price = this.getDataValue("price");
                return `${name}(价格：${price})`;
            }
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false,
            validate: {
                isFloat: {msg: "价格字段必须输入数字"},//必须浮点数
                min: {args: [0], msg: "价格字段必须大于0"}
            }
        },
        stock: {type: Sequelize.INTEGER, defaultValue: 0}
    },
    {//配置选项
        timestamps: false,//默认创建时间、更新时间创建与否
        freezTableName: true, // 表名冻结
        getterMethods: {
            amount() {
                return this.getDataValue("stock") + "kg";
            }
        },
        setterMethods: {
            amount(val) {
                const idx = val.indexOf("kg");
                const v = val.slice(0, idx);
                this.setDataValue("stock", v + 'kg');
            }
        }
    }
);

//模型扩展
Fruit.classify = function(name) {
  const tropicFruits = ["香蕉", "芒果"];
  return tropicFruits.includes(name) ? "热带水果" : "其他水果";
};
const arr = ["草莓", "aaa"];
arr.forEach(f => {
  //console.log(Fruit.classify(f));
});

// 实例方法
Fruit.prototype.totalPrice = function(count) {
  return this.price * count;
};
//同步
Fruit.sync({force: true})//force: true 强制删除旧表生成新表
    .then(() => {
        // 添加数据
        return Fruit.create({name: "香蕉", price: 3.5});
    })
    .then(async () => {
        // 查询
       let fruits = await Fruit.findAll();

        // 更新实例
       /* fruits[0].amount = "100kg";
        fruits[0].save();*/

        //console.log(fruits[0].totalPrice(50))
        //console.log(JSON.stringify(fruits));

        // 数据查询
        //id
        //Fruit.findByPk(1).then(fruit=>console.log(fruit.get()))
        //条件 where
        //Fruit.findOne({where:{name:'香蕉'}}).then(fruit=>console.log(fruit.get()))

        // 查询操作符
        /*const Op = Sequelize.Op;
        fruits = await Fruit.findAll({
            where: {
                price: {[Op.lt]: 5}
            },
            skip:0,
            limit:10,
            sort:{price:1} //1升序 -1降序
        });
        console.log(fruits[0].get());*/

        // 聚合
        // Fruit.max("price").then(price =>console.log(price));
        // Fruit.sum("price");

        // 更新
        /* await Fruit.update({ price: 5 }, { where: { id: 1 } });

         // 删除
         await Fruit.destroy({ where: { id: 1 } });*/

        // console.log(JSON.stringify(fruits));
    })
    .catch(err => {
        console.log(err.message);
    });

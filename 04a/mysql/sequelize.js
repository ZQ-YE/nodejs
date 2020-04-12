(async () => {
  // 引入 sequelize
  const Sql = require('sequelize');

  // 创建连接
  // 表名称，用户名，密码
  const sqlz = new Sql('user_info', 'root', 'yeeng0016', {
    host: 'localhost',
    dialect: 'mysql',
    // operatorsAliases: false
  })

  // 定义模型
  // id 使用UUID
  const Fruit = sqlz.define('Fruit', {
    id: {
      type: Sql.DataTypes.UUID,
      defaultValue: Sql.DataTypes.UUIDV1,
      primaryKey: true
    },
    name: { type: Sql.STRING(20), allowNull: false },
    price: { type: Sql.FLOAT, allowNull: false },
    stock: { type: Sql.INTEGER, defaultValue: 0 }
  })

  // 同步数据库
  // let ret = await Fruit.sync();
  // 同步数据库，强制更新（新删除已存在的表，再创建表）
  let ret = await Fruit.sync({ force: true });

  // 插入数据
  ret = await Fruit.create({
    name: "⾹香蕉",
    price: 3.5
  })

  // 查询
  // const res = await Fruit.findAll()
  // console.log(res);

  // 更新
  // await Fruit.update(
  //   { price: 5 },
  //   {
  //     where: { name: '⾹香蕉' }
  //   })
})()
(async () => {
  const mysql = require('mysql2/promise')
  // 设置连接
  const cfg = {
    host: 'localhost',
    user: 'root',
    password: 'yeeng0016',
    database: 'user_info'
  }

  // 创建连接对象
  const conn = await mysql.createConnection(cfg)
  // 连接
  conn.connect(err => {
    if (err) {
      throw err;
    } else {
      console.log("连接成功！");
    }
  });


  // 查询 conn.query()
  // 创建表
  const CREATE_SQL = `CREATE TABLE IF NOT EXISTS test (
  id INT NOT NULL AUTO_INCREMENT,
  message VARCHAR(45) NULL,
  PRIMARY KEY (id))`;
  const INSERT_SQL = `INSERT INTO test(message) VALUES(?)`;
  const SELECT_SQL = `SELECT * FROM test`;

  let ret = await conn.execute(CREATE_SQL)
  console.log("create:", ret)

  ret = await conn.execute(INSERT_SQL, ['abc']);
  console.log('insert:', ret)
  const [rows, fields] = await conn.execute(SELECT_SQL);
  console.log('select:', rows)




  // conn.query(CREATE_SQL, err => {
  //   if (err) {
  //     throw err;
  //   }
  //   // 插⼊数据
  //   conn.query(INSERT_SQL, "hello,world", (err, result) => {
  //     if (err) {
  //       throw err;
  //     }
  //     console.log(result);
  //     conn.query(SELECT_SQL, (err, results) => {
  //       console.log(results);
  //       conn.end(); // 若query语句有嵌套，则end需在此执⾏
  //     })
  //   });
  // });
})()
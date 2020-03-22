const fs= require('fs')

// 同步读取
const data = fs.readFileSync('./conf.js')
console.log("data:",data);
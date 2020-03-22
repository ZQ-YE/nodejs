const fs= require('fs')
const {promisify} = require('util')
const readFile = promisify(fs.readFile)

// console.log("fs",fs)
// 同步读取
// const data = fs.readFileSync('./01a/api/conf.txt')
// console.log("data:",data.toString());

// fs.readFile('./01a/api/conf.txt',(err,data)=>{
//     if(err)  throw err
//     console.log(data.toString())
// })

process.nextTick(async ()=>{
    const data = await readFile('./01a/api/conf.txt')
    console.log(data.toString())
})

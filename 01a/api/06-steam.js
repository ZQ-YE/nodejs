const fs = require('fs')
const rs = fs.createReadStream('./01a/api/avatar.png')
const ws = fs.createWriteStream('./01a/api/avatar2.png')
rs.pipe(ws)


//流程示例
// rs
//     ws
// 接通
// rs  ws
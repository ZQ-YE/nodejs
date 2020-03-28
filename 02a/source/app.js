const KKB = require('./kkb')
const app =  new KKB()
//  app.use((req, res)=>{
//      res.writeHead(200)
//      res.end('hi yee')
//  })
app.use(ctx=>{
    ctx.body = 'hi yee'
})

 app.listent(3000, ()=>{
     console.log('port: 3000')
 })
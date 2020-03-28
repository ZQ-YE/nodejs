const Koa = require('koa')
const app = new Koa()
app.use(async (ctx,next)=>{
    ctx.body = [
        {
            name:'yee'
        }
    ]
    await next()
})

app.use((ctx,next)=>{
    console.log('url:'+ctx.url)
    if(ctx.url === '/html'){
        ctx.type = 'text/html;charset=uft-8'
        ctx.body = `<b>hello Koa , ${ctx.body[0].name}</b>`
    }
})


app.listen(3000)
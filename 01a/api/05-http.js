const fs=require('fs')
const http=require('http')
http.createServer((request,response)=>{
    // console.log('there is a request!')
    // response.end('hello node')

    const {url, method, headers} = request
    console.log('url:',url)
    if(url == '/' && method === 'GET'){
        //打开html页面
        fs.readFile('./01a/api/index.html', (err,data)=>{
            if(err) {
                response.writeHead(500,{'Content-Type':'text/plain;charset=uft-8'})
                response.end('500 服务器错误')
            }
            response.statusCode = 200
            response.setHeader('Content-Type','text/html')
            response.end(data)
        })
    }else if(url==='/users' && method === 'GET'){
        //返回数组
        response.writeHead(200,{'Content-Type':'application/json'})
        response.end(JSON.stringify([{name:'tome'}]))
    }else if(method==='GET' && headers.accept.indexOf('image/*')!=-1){
        //图片
        //流 Burffer
        fs.createReadStream('./01a/api'+url).pipe(response)
        
    }



}).listen(3000,function(){
    console.log('listen on *:3000')
})
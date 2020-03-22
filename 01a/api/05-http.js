const fs=require('fs')
const http=require('http')
http.createServer((request,response)=>{
    // console.log('there is a request!')
    // response.end('hello node')

    const {url, method} = request
    console.log('url:',url)
    if(url == '/' && method === 'GET'){
        fs.readFile('./01a/api/index.html', (err,data)=>{
            if(err) {
                response.writeHead(500,{'Content-Type':'text/plain;charset=uft-8'})
                response.end('500 服务器错误')
            }
            response.statusCode = 200
            response.setHeader('Content-Type','text/html')
            response.end(data)
        })
    }

}).listen(3000)
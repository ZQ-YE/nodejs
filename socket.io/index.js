var app = require('express')()
var http = require('http').Server(app);
var io = require('socket.io')(http)

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
})

io.on('connection',function(socket){
    console.log('接收一个用户事件')

    //响应用户发送的信息
    socket.on("chat message",function(msg){
        console.log('chat message:'+msg)
        //广播给所有人
        io.emit('chat message',msg)
    })

    socket.on('disconnect',function(){
        console.log('接收用户信息失败')
    })

})

http.listen(3000,function(){
    console.log('listen on *:3000')
})


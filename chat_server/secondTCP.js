var net = require('net')


var chatServer = net.createServer() 
//构建一个客户端的列表
var clientList = []
chatServer.on('connection',function(client){

   client.write('Hi \n')
   clientList.push(client)
   client.on('data',function(data){
        for (var i = 0; i < clientList.length; i++){
            // 把数据发送给客户端 
            clientList[i].write(data)
        }
   })
})

chatServer.listen(8000)

console.log('the charServer is running......')

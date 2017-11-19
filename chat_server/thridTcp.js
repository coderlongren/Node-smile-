var net = require('net')
// 改进消息的发送
var chatServer = net.createServer() 
//构建一个客户端的列表
var clientList = []

chatServer.on('connection',function(client){
   client.name = client.remoteAddress + ':' + client.remotePort
   client.write('Hi' + client.name + '\n')
   clientList.push(client)
   client.on('data',function(data){
            broadcast(data,client)
        }
   )
  })
function broadcast(message,client){
    for (var i = 0; i < clientList.length;i++){
        if (client !== clientList[i]){
            clientList[i].write(client.name + 'says' + message)
        }
    }
}

chatServer.listen(8000)

console.log('the charServer is running......')

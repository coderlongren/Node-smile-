var net = require('net');

var chatServer = net.createServer();
// 增加一个事件监听器 
chatServer.on('connection',function(client){
    client.write('Hi \n');
    client.write('Bye \n');
    client.end();
});

chatServer.listen(8000);

var http = require('http')
http.createServer(function(request,response){
    //发送http头部
    //http状态值 200 ok
    // 内容的信息
    response.writeHead(200,{'Content-Type':'text/plain'});

    //发送响应数据 "hello world node.js"
    response.end("hello world")
}).listen(8888);
//终端打印信息
console.log("Server running at http://127.0.0.1:8888")    

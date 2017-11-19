var http = require('http');
http.createServer(function (req,res){
    res.writeHead(200,{'Context-Type':'text/plain'});
    res.end("hello world\n");
}).listen(8000,"127.0.0.1");
console.log("server is starting......8000");

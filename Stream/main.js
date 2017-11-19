 
var fs = require('fs');
var data = '';
//创建可读的流
var readerStream = fs.createReadStream('input.txt');

readerStream.setEncoding('UTF-8'); 
//处理流事件 --> data,end and error
readerStream.on('data',function(chunk){
    data += chunk;
});

readerStream.on('end',function(chunk){
    console.log(data);
});
readerStream.on('error',function(chunk){
    console.log(err.strack);
});

console.log("program stoped");

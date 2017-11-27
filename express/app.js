// require the express modu
var express = require('express')
// 进一步引用
var app = express()
app.get('/',function(req,res) {
	res.send('hello')
})
app.listen(8000,function(){
	console.log('app is listening at port 8000')
})
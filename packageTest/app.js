// 引入依赖 
var express = require('express');
var utility = require('utility');
// 建立express实例 
app = express();
app.get('/',function(req,res) {
	var q = req.query.q;
	// 对q 参数进行MD5 加密
	var md5Value = utility.md5(q);
	res.send(md5Value);
});

app.listen(8000,function(){
	console.log("app is running at port 8000");
});
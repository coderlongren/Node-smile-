var express = require('express')

var app = express.createServer()

app.get('/',function(req,res) {
	res.send('Welcom to Node Twitter')
})

app.listen(8000)

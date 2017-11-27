var express = require('express')
var superagent = require('superagent')
var cheerio = require('cheerio')

app = express()
app.get('/',function(req,res) {
	// use superagent to catch content of 'https://cnodejs.org/'
	superagent.get('https://cnodejs.org/')
		.end(function(err,sres){
			// 常规的错误处理
			if (err){
				return next(err);
			}
			var $ = cheerio.load(sres.text);
			var items = [];
			$('#toplic_list .toplic_title').each(function(index,element){
				var $element = $(element);
				items.push({
					title: $element.attr('title'),
					href: $element.attr('href')
				});
			});

			res.send(items);
		});
});
app.listen(8000,function(){
	console.log('app is running at port 8000');
});
var express = require('express');
var app = express();
app.get('/', function(req, res){
// 	asyncFunction1(params, function(){
// 		asyncFunction2(params, function(){
// 			asyncFunction3(params, function(){
				res.send('hello world')
// 			})
// 		})
// 	})
})
var server = app.listen(3000, function(){
	console.log('服务已开启...')
});
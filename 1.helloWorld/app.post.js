const koa = require('koa')
const app = new koa();

app.use(async (ctx) => {
	let postdata = '';
	ctx.req.on('data', data => {  //监听data事件
		postdata += data;         //拼装post请求参数
	})
	
	ctx.req.on('end', () =>{
		console.log(postdata);   //打印post请求参数
	})
})

app.listen(200, () =>{
	console.log('server is running at http://localhost:200')
})


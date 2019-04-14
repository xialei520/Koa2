const koa = require('koa');
const app = new koa();

app.use(async ctx => {
	ctx.response.status = 200;  //设置请求的状态码为200
	
	ctx.state.name = 'xialei' ;  //ctx.state是推荐的命名空间, 用于通过中间件传递信息和前端视图.
	
	ctx.cookies.set('name', 'xialei'); //设置cookie
	ctx.cookies.get('name');  //获取cookie
	
	ctx.throw(500); //页面看到状态码为500的错误页'Internal Server Error'
	
	console.log(ctx.state)
	if(ctx.request.accepts('json')){
		ctx.response.type = 'json';
		ctx.response.body = {data: 'helloworld'};
	}else if(ctx.request.accepts('html')){
		ctx.response.type = 'html';
		ctx.response.body = '<p>hello world</p>'
	}else{
		ctx.request.type = 'text';
		ctx.response.body = 'hello world'
	}
})

app.listen(3000, () =>{
	console.log('server is running at http://localhost:3000')
})
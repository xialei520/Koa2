const koa = require('koa');
const bodyparser = require('koa-bodyparser');
const app = new koa();

app.use(bodyparser());
app.use(async (ctx, next) => {
	if(ctx.url == '/' && ctx.method == 'GET'){
		ctx.type = 'html';
		let html = `
			<h1>登陆</h1>
			<form method="POST" action='/'>
				<p>用户名</p>
				<input name="userName">
				<p>密码</p>
				<input name="password" type="password"><br>
				<button type='submit'>submit</button>
			</form>
			
		`;
		ctx.body = html;
	}else if(ctx.url == '/' && ctx.method == 'POST'){
		//当POST请求时, 中间件koa-bodyparser解析post表单里的数据
		let postData = ctx.request.body;
		ctx.body = postData;
		
	}
})

app.listen(3000, () => {
	console.log('server is running at http://localhost:3000')
})
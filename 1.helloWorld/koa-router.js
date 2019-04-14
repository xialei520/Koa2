const koa = require('koa');
const app = new koa();
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const router = new Router(); //初始化koa-router中间件

router.get('/', (ctx, next) => {
	//绘制登录页, 省略
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
})

router.post('/', (ctx, next) => {
	//解析formData数据, 省略
	//当POST请求时, 中间件koa-bodyparser解析post表单里的数据
	let postData = ctx.request.body;
	ctx.body = postData;
})

app.use(bodyParser())
   .use(router.routes()) //加载koa-router中间件
   .use(router.allowedMethods())  //对异常状态码的处理

app.listen(3000, () => {
	console.log('server is running at http://localhost:3000')
})
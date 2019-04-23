const koa = require('koa');
const app = new koa();
const bodyparser = require('koa-bodyparser');
const Router = require('koa-router');
const router = new Router();

// 挂载bodyparser
app.use(bodyparser())

// app.use('/', ctx => {
// 	//如果要获取元数据,可以使用ctx.request.rawBody
// 	ctx.body = ctx.request.body;
// })

router.get('/user', (ctx, next) => {
	ctx.body = `
		<form action='/user/login' method='post'>			
			<input name='user' value=''>
			<br>
			<input name='pwd' value=''>
			<br>
			<button>提交</button>
		</form>
	`
})

app.use(router.routes())
app.listen(3000, () => {
	console.log('server is running at http://localhost:3000')
})
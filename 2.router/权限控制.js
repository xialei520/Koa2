const koa  = require('koa');
const app = new koa();
const Router = require('koa-router');
const bodyparser = require('koa-bodyparser')
const router = new Router();

const {sign} = require('jsonwebtoken'); //从JWT中获取sign方法, 用来生成token
const secret = 'demo';                  //设置密钥, 用于生成token和构造JWT
const jwt = require('koa-jwt')({secret});  //用密码构造JWT, 用来校验token

router.post('/api/login', async (ctx, next) => {
	const user = ctx.request.body;
	console.log(user)
	if(user && user.username){
		let {username} = user;

		const token = sign({username}, secret, {expiresIn: '1h'});
		ctx.body = {
			message: 'Get Token Success',
			code: 1,
			token
		}
	}else{
		ctx.body = {
			message: 'Param Error',
			code: -1
		}
	}
})
     .get('/api/userInfo', jwt, async (ctx, next) => {
     	ctx.body = {username: ctx.state.user.username};
     })
     .get('/api/adminInfo', jwt, async ctx => {
     	ctx.body = {username: ctx.state.user.username}
     })
     .get('/api/index', async ctx => {
     	ctx.body = `
     		<form action='/api/login' method='post'>
			姓名: <input name='username' value='' /><br>
			密码: <input name='password' value='' /><br>
			<input type='submit' value='提交'>
			</form>
     	`
     })

app
   .use(bodyparser())
   .use(router.routes())
app.listen(3000, () => {
	console.log('server is running at http://localhost:3000')
})
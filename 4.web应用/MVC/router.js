const Router = require('koa-router');
const router = new Router();
const HomeController = require('./controller/home');

module.exports = (app) => {
	router.get('/', HomeController.index)
	router.get('/home', HomeController.home)
	router.get('/user', HomeController.user)
	router.post('/user/login', HomeController.login)

	// router.get('/user', ctx => {
	// 	ctx.response.body = `
	// 		<form action='/user/login' method='post'>
	// 		<span>用户名:</span> <input name='user' value=''><br>
	// 		<span>密码:</span> <input name='pwd' value=''><br>
	// 		<button type='submit'>提交</button>
	// 		</form>
	// 	`
	// })
	// router.post('/user/login', ctx => {
	// 	let {user, pwd} = ctx.request.body;
	// 	if(user == 'xialei' && pwd == '123456'){
	// 		ctx.body = `<h1>${user}, 登陆成功!</h1>`
	// 	}else{
	// 		ctx.body = '账号登陆失败!'
	// 	}
	// })
	// router.get('/', ctx => {
	// 	ctx.body = '<h1>index page</h1>'
	// 	router.get('/home', ctx => {
	// 		console.log(ctx.request.query)
	// 		console.log(ctx.request.querystring)
	// 		ctx.body = '<h1>home page</h1>'


	// 	})
	// })
	app.use(router.routes()).use(router.allowedMethods())
}
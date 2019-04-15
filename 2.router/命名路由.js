const koa = require('koa');
const Router = require('koa-router');
const router = new Router();
const app = new koa();

//设置路由名称为user
router.get('user', '/users/:id', (ctx, next) => {
	ctx.body = '路由哦'
})

//调用路由名称user, 生成路由=='/users/5'
// router.url('user', 5)
router.url('user', {id: 8})

router.use((ctx, next) => {
	//重定向到路由名称为sing-in的页面
	ctx.redirect(ctx.router.url('sign-in'))
})
 
app.use(router.routes())
app.listen(3000, () => {
	console.log('server is running at http://localhost:3000')
})
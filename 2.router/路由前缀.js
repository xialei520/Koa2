const koa = require('koa');
const Router = require('koa-router');
const router = new Router({
	prefix: '/users'
});
const app = new koa();

//匹配路由'/users'
router.get('/', (ctx, next) => {
	ctx.body = '路由前缀'
})

//匹配路由'/users/:id'
router.get('/:id', (ctx, next) =>{
	ctx.body = '路由前缀:id'
})

app.use(router.routes())
app.listen(3000, () => {
	console.log('server is running at http://localhost:3000')
})
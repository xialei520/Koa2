const koa = require('koa');
const app = new koa();
const Router = require('koa-router');
const router = new Router();

router.get('/', ctx => {
	console.log(ctx.request.query)
	console.log(ctx.request.querystring)
	ctx.body = 'home'
})

router.get('/home/:id/:name', ctx => {
	console.log(ctx.params)
	ctx.body = '<h1>home page  /:id/:name</h1>'
})

app.use(router.routes());
app.listen(3000, () => {
	console.log('server is running at http://localhost:3000')
})
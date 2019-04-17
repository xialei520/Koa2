const koa = require('koa');
const app = new koa();
const Router = require('koa-router');
const router = new Router();

router.get('/:name/:age', (ctx, next) => {
	ctx.body = 'kkkkk';
	console.log(ctx.params)
})

app.use(router.routes())
app.listen(3000, () => {
	console.log('server is running at http://localhost:3000')
})
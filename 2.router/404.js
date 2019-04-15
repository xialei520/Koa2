const koa = require('koa');
const app = new koa();
const Router = require('koa-router');
const router = new Router();

// app.use(async (ctx, next) => {
// 	const {url, method} = ctx;
// 	if(url == '/404' && method == 'GET'){
// 		ctx.body = 'Page Not Found';
// 		ctx.status = 404;
// 	}else{
// 		ctx.body = 'Default Content';
// 	}
// 	await next();
// })

router.get('/404', (ctx, next) => {
	ctx.body = 'page not found';
	ctx.status = 404;
})

app.use(router.routes())

app.listen(3000, () => {
	console.log('server is running at http://localhost:3000')
})
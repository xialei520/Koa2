const Koa = require("koa");

const router = require('koa-router')();

const app = new Koa();
app.use(async (ctx, next) => {
	console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
	await next();
})
//add url-router
router.get('/hello/:name', async (ctx, next) => {
	var name = ctx.params.name;
	console.log(ctx.params)
	ctx.response.body = `<h1>${name}</h1>`;
})

router.get('/', async (ctx, next) => {
	ctx.response.body = '<h1>Index</h1>'
})

app.use(router.routes());
 
app.listen(3000);
console.log('app start at port 3000....')
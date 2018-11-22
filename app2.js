const Koa = require("koa");
const app = new Koa();

app.use(async (ctx, next) => {
	console.log(`${ctx.request.url} ${ctx.request.method}`);
	await next();
})

app.use(async (ctx, next) => {
	const start = new Date().getTime();
	await next();
	const ms = new Date().getTime() - start;
	console.log(`Time: ${ms}ms`) //打印耗费时间
})

app.use(async (ctx, next) => {
	await next();
	ctx.response.type = 'text/html';
	ctx.response.body = '<h1>hello, Koa!</h1>'
})
app.listen(3000);
console.log('app start at port 3000....')
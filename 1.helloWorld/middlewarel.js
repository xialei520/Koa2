const koa = require('koa');
const app = new koa();

app.use(async (ctx, next) => {
	let stime = new Date().getTime();
	await next();
	let etime = new Date().getTime();
	ctx.response.type = 'html';
	ctx.response.body = '<h1>hello world</h1>'
	console.log(`请求地址:${ctx.request.path}, 响应时间: ${etime - stime}ms`)
})

app.use(async (ctx, next) => {
	console.log('中间件 doSoming');
	await next();
	console.log('中间件执行 over')
})

app.listen(3000, () => {
	console.log('server is running at http://localhost:3000')
})
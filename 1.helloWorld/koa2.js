const koa = require('koa');
const app = new koa();
app.listen(3000, () => {
	console.log('服务已开启...')
})

app.use(async ctx => {
// 	await asyncFunction1(params);
// 	await asyncFunction2(params);
// 	await asyncFunction3(params);
	ctx.body = 'Hello World';
})
const koa = require('koa');
const app = new koa();
app.listen(3000, () => {
	console.log('server is running at http://localhost:3000')
})
app.use(async (ctx, next) => {
	await next();
	ctx.response.type = 'text/html';
	// ctx.response.body = '<h1>hello world </h1>';
	ctx.response.body = {
		url: ctx.request.url, //获取请求的url
		query: ctx.request.query.search, //获取解析的查询字符串
		querystring: ctx.request.querystring //获取原始查询字符串
	}
})
const koa = require('koa');
const app = new koa();
const bodyparser = require('koa-bodyparser');
const Router = require('koa-router');
const router = new Router();
const static = require('koa-static');  //用于加载静态资源的中间件
const views = require('koa-views');    //用于加载html模板文件
const path = require('path');

app.use(views(__dirname + '/views', {  //加载模板引擎
	map: {html: 'ejs'}
}))

app.use(static(                        //加载静态资源
	path.join(__dirname, '/static')
))

router.get('/', async (ctx, next) => {
	await ctx.render('index')          //渲染模板
})

router.post('/', (ctx, next) => {
	let postData = ctx.request.body;
	ctx.body = postData;
})

app.use(bodyparser())
	.use(router.routes())
	.use(router.allowedMethods())
app.listen(3000, () => {
	console.log('server is running at http://localhost:3000')
})
const koa = require('koa');
const Router = require('koa-router');
const router = new Router();
const app = new koa();

router
      .post('/users', (ctx, next) => {
			ctx.body = '新增了一位用户'
		})
      .del('/users/:id', (ctx, next) => {
		  ctx.body = '删除了用户编号为id的用户'
	  } )
	  .put('/users/:id', (ctx, next) => {
		  ctx.body = '修改了用户编号为id的用户信息'
	  })
	  .get('/', async (ctx, next) => {
		  ctx.body = '我是编号为id的用户信息'
		  // await next()
	  })
	  .all('/' , (ctx, next) => {
		  ctx.body = '我是all请求'
	  })
app.use(router.routes())
app.listen(3000, () => {
	console.log('server is running at http://localhost:3000')
})
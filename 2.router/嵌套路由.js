const koa = require('koa');
const app = new koa();
const Router = require('koa-router');
const forums = new Router();
const posts = new Router();

posts.get('/', (ctx, next) => {
	ctx.body = 'users'
})

posts.get('/:pid', (ctx, next) => {
	ctx.body = 'hahah'
})

forums.use('/forums/:fid/posts', posts.routes(), posts.allowedMethods())
//'/forums/:fid/posts' => '/forums/123/posts'
//'/forums/:fid/posts/:pid' => '/forums/123/posts/123'


app.use(forums.routes())
app.listen(3000, () => {
	console.log('server is running at http://localhost:3000')
})
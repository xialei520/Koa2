const koa = require('koa');
const app = new koa();
const bodyparser = require('koa-bodyparser');
const router = require('./router');
app.use(bodyparser());

router(app);
app.listen(3000, () => {
	console.log('server is running at http://localhost:3000')
})

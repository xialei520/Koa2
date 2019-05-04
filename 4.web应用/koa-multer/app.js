const koa = require('koa');

const app = new koa();
const router = require('./router');





router(app);
app.listen(3000, () => {
	console.log('server is running at http://localhost:3000')
})
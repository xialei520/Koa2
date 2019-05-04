const koa = require('koa');
const static = require('koa-static');
const path = require('path');
const app = new koa();

// app.use(static('.'))
app.use(static(path.resolve(__dirname), {
	maxage: 30 * 24 * 60 * 60 * 1000
}))

app.listen(3000, () => {
	console.log('server is running at http://localhost:3000');
})
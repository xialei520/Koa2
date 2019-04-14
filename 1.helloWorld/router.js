const koa = require('koa');
const app = new koa();
 
app.use(async (ctx) => {
	if(ctx.request.method === 'POST'){
		
	}else if(ctx.request.method === 'GET'){
		if(ctx.request.path !== '/'){
			ctx.response.type = 'html';
			ctx.response.body = '<a href="/">GO TO INDEX</a>'
		}
	}else{
		ctx.response.body = 'hello world'
	}
})
 
app.listen(3000, () => {
	console.log('server is running at http://localhost:3000')
})
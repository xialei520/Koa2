const Koa = require("koa");
const app = new Koa();

app.use(async (ctx, next) => {
	if(ctx.request.path == '/'){
		ctx.response.body = 'index.page'
	}else{
		await next();
	}
})

app.use(async (ctx, next) => {
	if(ctx.request.path == '/test'){
		ctx.response.body = 'TEST page';
	}else{
		await next();
	}
})

app.use(async (ctx, next) => {
	 if(ctx.request.path == '/error'){
	 	ctx.response.body = 'ERROR page'
	 }else{
	 	await next();
	 }
})
app.listen(3000);
console.log('app start at port 3000....')
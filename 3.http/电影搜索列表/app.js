const koa = require('koa');
const app = new koa();
const Router = require('koa-router');
const router = new Router();
const http = require('http');
const querystring = require('querystring');

const server = {
	search: async (kw = '流浪地球') => {
		return new Promise((resolve, reject) => {
			http.request({
				hostname: 'm.maoyan.com',                           //请求要访问的服务器域名
				path: '/ajax/search?' + querystring.stringify({     //序列化对象
					kw,
					cityId: 10                                      //10表示上海
				})
			}, (res) => {
				// console.log(res)
					res.setEncoding('utf-8');
					let data = [];
					res.on('data', (chunk) => {
						data.push(chunk);
					}).on('end', () => {
						resolve(data.join(''))
					})
				 
			}).end()
		})
	}
}

router.get('/', async (ctx, next) => {
	let {kw} = ctx.query;  //获取url参数kw的值
	let data = await server.search({kw: '流浪地球'});                //调用服务接口获取影片列表数据
	console.log(data)
	// ctx.body = Render(JSON.parse(data), kw);           //将数据渲染成对应的html,并响应返回
	ctx.body = data;
})


app.use(router.routes()).listen(3000, () =>{
	console.log('server is running at http://localhost:3000')
})
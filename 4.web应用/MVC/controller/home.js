const HomeService = require('../service/home');
const findMusic = require('../service/database')
module.exports = {
	index: async (ctx, next) => {
		ctx.body = '<h1>index page</h1>';
	},
	home: async (ctx, next) => {
		console.log(ctx.request.query)
		console.log(ctx.request.querystring)
		ctx.body = '<h1>home page</h1>'
	},
	user: async ctx => {
		ctx.response.body = `
			<form action='/user/login' method='post'>
			<span>用户名:</span> <input name='user' value=''><br>
			<span>密码:</span> <input name='pwd' value=''><br>
			<button type='submit'>提交</button>
			</form>
		`
	},
	login: async ctx => {
		let {user, pwd} = ctx.request.body;
		let data = await HomeService.login(user, pwd);
		ctx.body = data;
		// if(user == 'xialei' && pwd == '123456'){
		// 	ctx.body = `<h1>${user}, 登陆成功!</h1>`
		// }else{
		// 	ctx.body = '账号登陆失败!'
		// }
	},
	list: async (ctx, next) => {
		const sql = `SELECT * FROM music`;
		var result = await findMusic.findMusic() 
		
		var arr = []
		result.forEach(item => {
			arr.push({
				ID: item.ID,
				title: item.title,
				url: item.url
			})
		})
		var data = {
			errorCode: '0',
			errorMsg: 'success',
			data: arr 
		}
		console.log(data)
		ctx.set('Content-Type', 'text/html')
		ctx.set('Access-Control-Allow-Origin','*');
		ctx.body = JSON.stringify(data);
	}
}
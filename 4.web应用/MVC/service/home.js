module.exports = {
	login: async (user, pwd) => {
		let data = ''
		if(user == 'xialei' && pwd == '123456'){
			data = `<h1>${user}, 登陆成功!</h1>`
		}else{
			data = '账号登陆失败!'
		}
		return data;
	}
}
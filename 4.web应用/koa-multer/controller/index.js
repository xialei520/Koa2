const fs = require('fs');
module.exports = {
	index: async (ctx, next) => {
		ctx.body = `
			<form action='/upload' method='post' enctype='multipart/form-data'>
				<span>文件:</span><input type='file' name='avatar'/><br>
				<button type='submit'>上传</button>
			</form>
		`
	},
	file: async (ctx, next) => {
		const {
			originalname,
			path: out_path,
			mimetype,
			destination
		} = ctx.req.files[0];
		// console.log(ctx.req.files)
		// [ { fieldname: 'avatar',
	 //    originalname: '下载.png',
	 //    encoding: '7bit',
	 //    mimetype: 'image/png',
	 //    destination: './uploads/',
	 //    filename: '4114fabca2feb6d52b94dfe1102a9f3e',
	 //    path: 'uploads\\4114fabca2feb6d52b94dfe1102a9f3e',
	 //    size: 672344 } ]
	 	   console.log(out_path) 
	 	   //out_path  相对路径
	 	let newName = destination + originalname;
	 	//同步调用重命名
	 	let err = fs.renameSync(out_path, newName);
	 	let result;
	 	if(err){
	 		result = JSON.stringify(err);
	 	}else{
	 		result = '<h1>upload success</h1>'
	 	}
		ctx.body = result;
	}
}
module.exports = {
	index: async (ctx, next) => {
		ctx.body = `
			<form action='/upload' method='post' enctype='multipart/form-data'>
				<span>文件:</span><input type='file'/><br>
				<button type='submit'>上传</button>
			</form>
		`
	},
	file: async (ctx, next) => {
		// const {
		// 	originalname,
		// 	path: out_path,
		// 	mimetype
		// } = ctx.req.file;
		console.log(ctx.req.file)
	}
}
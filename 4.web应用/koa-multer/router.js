const Router = require('koa-router');
const router = new Router();

const multer = require('koa-multer');

const controller = require('./controller/index')
module.exports = (app) => {
	// const upload = multer({
	// 	dest: 'uploads/'
	// })

	// const types = upload.single('avatar')
	

	router.get('/', controller.index);
	router.post('/upload', controller.file)
	// app.use(upload)
	app.use(router.routes())
}
	


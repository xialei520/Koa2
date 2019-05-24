const Router = require('koa-router');
const router = new Router();

const multer = require('koa-multer');

const controller = require('./controller/index')
module.exports = (app) => {
	const upload = multer({
		dest: './uploads/'
	})

	const types = upload.any()

	router.get('/', controller.index);
	router.post('/upload', types, controller.file)
	app.use(router.routes());

}
	


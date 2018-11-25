const Koa = require("koa");
const app = new Koa();
const controller = require('./controller');
app.use(controller());

app.listen(3000);
console.log('app start at port 3000....')
const Koa = require("koa");

const router = require('koa-router')();
const fs = require('fs');
const app = new Koa();
app.use(router.routes());

var files = fs.readdirSync(__dirname+ '/controllers');
var js_files = files.filter( f => {
    return f.endsWith('.js');
})
console.log(files,js_files)
for(var f of js_files){
    console.log(`process controller: ${f}...`);
    let mapping = require(__dirname+ `/controllers/` + f);
    console.log(JSON.stringify(mapping)+'0')
    for(var url in mapping){
        console.log(url+'99')
        if(url.startsWith('GET')){
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        }else if(url.startsWith('POST')){
            var path = url.substring(4);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        }else{
            console.log(`invalid URL: ${url}`)
        }
    }
}
app.listen(3000);
console.log('app start at port 3000....')
const fs = require('fs');
const rm = require('rimraf');  //rimraf 包的作用：以包的形式包装rm -rf命令，用来删除文件和文件夹的，不管文件夹是否为空，都可删除.
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'cdb-ecuikhtu.bj.tencentcdb.com',
    user: 'root',
    password: 'xl371329',
    database: 'mm',
	port: 10028
})

// const path = require('path');
// var readDir = fs.readdirSync("./song"); //读取目录下的所有文件夹及文件
// console.log(readDir.length)
// readDir.forEach(async (item, index, arr) => {
// 	// console.log(path.resolve(__dirname, item))
// 	var url = await `http://www.loveinmymind.xyz/dataInsert/song/${item}` 
// 	var title = await item.split('.')[0]
// 	// rm(addr, function(err) { //循环删除文件夹及文件
// 	// 		console.log(err);
			 
// 	// })
// 	console.log(title, url)
// 	// await insertDatabase(index, title, url)
	 
	
// })

//插入数据库
async function insertDatabase(index, title, url){
    
    await db.query(`INSERT INTO music (ID, title, url) VALUES ('${index}', '${title}', '${url}')`, function (err, data) {
        if (err) {
            console.error(err);
        } else {
             console.log('success')
        }
    })
}
 
// let fs =  require ('fs');
// let stdin = process.stdin,
//     stdout = process.stdout;
// fs.readdir(process.cwd(),function (err,files) {
//     console.log(files);
//     console.log('');
//     if (!files.length){
//         return console.log('NO FILES\n');
//     }else

//     function file(i) {
//         var filename = files[i];
//         fs.stat(__dirname + '/' + filename, function (err, stat) {
//             if (stat.isDirectory()) {
//                 console.log(i +':Dir:' + filename + '\n');
//             }
//             else {
//                 console.log(i +':File:' + filename + '\n');
//             }
//         });

//         i++;
//         console.log("！！！"+i + files.length);
//         if (i === files.length){  
//           read(); //列表扫描完后才进入
//         }else {
//             file(i); //递归加载
//         }
//     }
//     file(0);//初始加载
// })
// function read() {
    
//     stdout.write('ENTER THE CHOOSE\n');
//     stdin.resume();
// }

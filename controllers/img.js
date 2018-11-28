var js_img = async (ctx, next) => {
    console.log('获取连接')
    const mysql = require('mysql');

    const db = mysql.createPool({
        host: 'cdb-ecuikhtu.bj.tencentcdb.com',
        user: 'root',
        password: 'xl371329',
        database: 'mm',
        port: 10028
    })
    var arr = [];
    var logintemp =await db.query(`SELECT * FROM  mm`,await function (err, data) {
        if (err) {
            console.error(err);
        } else {
            console.log('success')
            for(var i = 0; i < data.length; i++){
                arr.push(data[i])
            }
        }
        
    })
    ctx.body =  arr
    
}
 

module.exports = {
    'GET/api': js_img
}
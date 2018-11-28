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
    let query = function (sql, values) {
        return new Promise((resolve, reject) => {
            db.getConnection(function (err, connection) {
                if (err) {
                    reject(err)
                } else {
                    connection.query(sql, values, (err, rows) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(rows)
                        }
                        connection.release()
                    })
                }
            })
        })

    }
    // for (var i = 0; i < data.length; i++) {
    //     arr.push(data[i])
    // }
    let findUserData = function() {
        let _sql = `SELECT * FROM  mm`
        return query( _sql )
      }
    await  findUserData().then(r => {
    
        
        // console.log(ctx)
        ctx.response.body = r
      })
    
    // ctx.response.body = {name:'xialei'}
}


module.exports = {
    'GET/api': js_img
}
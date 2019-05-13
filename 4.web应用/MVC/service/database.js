const mysql = require('mysql');
const db = mysql.createPool({
    host: 'cdb-ecuikhtu.bj.tencentcdb.com',
    user: 'root',
    password: 'xl371329',
    database: 'mm',
	port: 10028
}) 
module.exports = {
	findMusic : async(result) => {
		 return new Promise((resolve, reject) => {
		 	db.query(`SELECT * FROM music ORDER BY ctime ASC`, function (err, data) {
		        if (err) {
		            reject(err)
		        } else {
		            resolve(data)
		             console.log('success')
		        }
		        
		    })
		 })
			
		 
		
	}
}
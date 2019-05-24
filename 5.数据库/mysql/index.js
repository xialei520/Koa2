const Sequelize = require('sequelize');
const sequelize = new Sequelize('boss', 'root', 'xl371329',{
	host: 'cdb-ecuikhtu.bj.tencentcdb.com',
	dialect: 'mysql',
	port: 10028

})

sequelize.authenticate().then(() => {
	console.log('Connected');
}).catch(err => {
	console.error('Connect failed')
})


const Project = sequelize.define('project', {   //定义Project模型
	name: {                         //定义name字段
		type: Sequelize.STRING,    //定义类型为String
		allowNull: false,			//不能为空
		unique: true				//必须唯一, 不允许重复
	},
	date: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW    //默认值为当前时间
	}
})
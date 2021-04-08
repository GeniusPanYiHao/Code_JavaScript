const Sequelize=require('sequelize')

const sequelize = new Sequelize('code_text', 'root', '123', {
  host: '127.0.0.1',//:地址
  dialect: 'mysql',//:数据库类型
  port:'3306'//:数据库默认端口
})

sequelize
  .authenticate()
  .then(() => {
    console.log('连接成功');
  })
  .catch(err => {
    console.error('连接失败'+'错误信息：'+err);
  });
//:导出这两个创建模型
module.exports={Sequelize,sequelize}
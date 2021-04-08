const{Sequelize,sequelize}=require('../init')

const User = sequelize.define('user', {
    // 一个对象就是一个字段
    username: {
        // 约束字段的类型
        type: Sequelize.STRING,
        // 是否允许为空 默认是 true
        allowNull: false,

    },
    password: {
        type: Sequelize.STRING,
        // 是否允许为空 默认是 true
        allowNull:false,
        //:约束不能为空

        

    },
})
User.sync({force: false}).then(function () {
    // 已创建数据表
   console.log('同步模型成功');
  });

module.exports={User}
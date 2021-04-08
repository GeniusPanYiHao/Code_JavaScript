//导入express

const express=require('express')
const app=express()
//:导出接收post请求模型
const bodyParser=require('body-parser')
const url=require('url');
const path=require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

const main=require('./route/main')

//:导入数据库连接
require('./database/init')

// app.get('/',(req,res)=>{
//     res.status(404).send({
//         data:null,
//         meta:{
//             msg:'Not Found',
//             status:404
//         }
//     })
// })
require('./database/model/user')

app.use('',main)
//设定视图路径主要清楚__dirname的意思就可以了，它是node.js中的全局变量，表示取当前执行文件的路径     
// 挂载静态资源
app.use(express.static(path.join(__dirname, 'static/public'))); 
app.listen(8888)
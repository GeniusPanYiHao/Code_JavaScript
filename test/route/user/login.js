const {user, User} = require('../../database/model/user')
const jwt=require('jsonwebtoken')
module.exports=async(req,res)=>{
    //:接收客户端传递过来的账号和密码
    const{username,password}=req.body
    //:根据用户名来查询数据库是否存在这个用户
    const findUser=await User.findOne({where:{username}})
    //:判断
    if(!findUser)
    {
        res.status(400).send(
            {
                data:null,
                meta:{
                    msg:"用户名不存在！",
                    staus:400
                }
            }
        )
        return
    }
    //:判断账号密码是否匹配
    if(username!=findUser.username||password!=findUser.password)
    {
        res.status(400).send(
            {
                data:null,
                meta:{
                    msg:"账号或密码不正确！",
                    staus:400
                }
            }
        )
        return
    }
    //:登录成功生成token返回给客户端，第一个参数是组，第二个是私钥
    const token=jwt.sign({username},'PanYiHao')
    res.status(200).send(
        {
            data:{
                username:username,
                token
            },
            meta:{
                msg:"登陆成功",
                staus:200
            }
        }
    )
}
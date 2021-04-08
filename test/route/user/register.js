const {User}=require('../../database/model/User')
//:导出
module.exports=async(req,res)=>{
    //:接收客户端传过来的信息
    const{username,password}=req.body
    // var username=url.parse(req.url,true).query;
    // var username=url.parse(req.url,true).query.register_username;
    // var password=url.parse(req.url,true).query.register_password;
    
    

    // const username=req.url.register_password;
    // const password=req.url.register_password;
    //:根据客户端传递过来的用户名查询数据库中是否存在用户名
    const model=await User.findOne({where:{username}})
    if(model)
    {
        res.status(400).send(
            {
                data:null,
                meta:{
                    msg:"用户名已创建",
                    status:400
                }
            }
        )
        return
    }
    const createUser=await User.create({ username,password})
    res.status(201).send({
        data:{
            createUser
        },
        meta:{
            msg:"创建成功！",
            status:201
        }
    })
}
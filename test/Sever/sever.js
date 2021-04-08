//require表示引包，引包就是引用自己的一个特殊功能
const { fstat } = require('fs');
var http = require('http');
var fs=require('fs');
//创建服务器，参数就是一个回调函数，表示如果有请求进来，要做什么
var server = http.createServer(function(req, res){
            //req表示请求， request；res表示响应，response

    //设置HTTP头部，状态码是200， 文件类型是html。字符编码格式是 UTF-8
    //:fs.readFile(file[,option],callback)：读取文件。其中file可以为文件名或文件路径，options可以为对象或字符串。包括读取文件时的编码、文件的读取方式（默认为‘r’）； 
    //fs.writeFile(file,data[,options],callback)：写入文件。data为写入的内容。options为可选参数，可以为encoding（编码方式）、mode（权限）和flag（文件写的方式，默认为’w’) 

    res.writeHead(200, {'Content-Type':'text/html; charset= UTF-8; '});
    var urls=req.url;
    if(urls==='/')
    {
    fs.readFile('login.html','utf-8',function(err,data)
    {
        res.end(data);
    })
    }
    else if(urls==='/register.html')
    {
        fs.readFile('register.html','utf-8',function(err,data)
    {
        res.end(data);
    })
    }
});

//运行服务器，监听8083端口
server.listen(8083, '127.0.0.1');

	
	
	
	
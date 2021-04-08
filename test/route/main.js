const express=require('express')

const main=express.Router()

main.post('/register',require('./user/register'))
main.post('/login',require('./user/login'))

main.post("/register",function (req,res) {
    res.render("register");
    });

module.exports=main
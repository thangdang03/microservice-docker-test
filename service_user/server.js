const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 1000;
const Client = require("./inint.DBS/inint.redis");
const connection = require('./inint.DBS/inint.mysql');
const server = app.listen(port , ()=>{
    console.log('server is listening in port ' , port);
});

app.get("", async (req,res)=>{
    const select = `select * from sinhvien;`;
    const dbredis = await Client.get('name');
    const data = await connection.execute(select,(err,result)=>{
            if(err){console.log(err)}
            console.log({result,dbredis});
            return result;
        });
    res.status(200).json({
        message: `this is server for user`
    });
})

process.on("SIGINT",()=>{
    console.log('server is close');
});
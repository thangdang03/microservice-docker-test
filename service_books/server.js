const express = require("express");
const app = express();
app.get('/',(req,res)=>{
    res.status(200).json({
        message: "this is service books"
    });
});

const server = app.listen(4000,(req,res)=>{
    console.log("server is run in port",4000);
})

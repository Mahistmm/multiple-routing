const { application } = require("express");
const express = require("express");
const app = express();
const apiRouter = require("./router")

app.use("/api",apiRouter)

require("dotenv").config();


app.get("/",(req,res)=>{
    res.json({msg: "It's working"})
})

app.get("*",(req,res)=>{
    res.json({msg: " It's not found "})
})

app.listen(process.env.port || 4000,()=>{
    console.log("server is up and running");
})
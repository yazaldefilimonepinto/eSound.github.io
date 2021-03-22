const express = require("express");
const path = require("path")
const app = express();
app.use(express.static(path.join(__dirname,"public")))
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.listen(3007,()=>{
    console.log("server on 3007")
})

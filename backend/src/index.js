const express=require("express");
const mongoose=require("mongoose");
const app=express();

app.get("/",(req,res)=>{
res.send("hello")
})
mongoose.connect("mongodb+srv://sudarshan:sudarshan@cluster0.ydgncyl.mongodb.net/TaskPlanner").then(()=>{
    app.listen(8005,()=>{
        console.log("listening on http://localhost:8005")
    })
})

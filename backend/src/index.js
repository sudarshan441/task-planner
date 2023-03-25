const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const sprintRouter=require("./features/routes/sprintRoute");
const taskRouter=require("./features/routes/taskRoute");
const userRouter=require("./features/routes/userRoute");
const connect  = require("./config/db");


const app=express();
app.use(express.json());
app.use(cors());
app.use("/sprint",sprintRouter)
app.use("/task",taskRouter)
app.use("/user",userRouter)


app.get("/",(req,res)=>{
res.send("hello")
});

app.listen(8005,async()=>{
    await connect()
    console.log(`runnning on http://localhost:${8005}`)
})
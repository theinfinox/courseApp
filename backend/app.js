const express=require("express");
const cors=require('cors');
require("dotenv").config();
//import local modules

const course_route=require('./routes/course')
const user_route=require('./routes/user')

//Intializing express and cors
const app=express();
app.use(cors())
//Middleware API
app.use("/api",course_route);
app.use("/user",user_route)

//Server in listening mode
app.listen(process.env.port,()=>{
    console.log("Server is listening")
})
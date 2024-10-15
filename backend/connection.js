const mongoose=require('mongoose');
require("dotenv").config();
mongoose.connect(process.env.con).then((res)=>{
    console.log('DB is connected')
}).catch((res)=>{
    console.log('DB not connected')
})
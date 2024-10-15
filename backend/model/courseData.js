const mongoose=require('mongoose');
const courseSchema=mongoose.Schema({
   courseId:String,
   courseName:String,
   category:String,
   description:String,
   duration:String,
   fee:String
 
   })
const CourseData=mongoose.model('ictakcourse',courseSchema);
module.exports=CourseData
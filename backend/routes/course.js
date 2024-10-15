const express=require("express");
const router=express.Router();
const jwt=require('jsonwebtoken')
require('../connection');
const courseModel=require('../model/courseData');
router.use(express.json())
//Adding middleware
function verifyToken(req,res,next){
    let token=req.headers.token;
    try {
        if (!token) throw 'Unauthorised Access'
        let payload=jwt.verify(token,"secret")
         if (!payload) throw 'Unauthorised Access'
         next()
        
    } catch (error) {
        res.json({message:error})
    }
}

//API methods

router.get('/courses',verifyToken,async(req,res)=>{
     try {
        const data= await courseModel.find();
           res.send(data)
    } catch (error) {
        console.log(error)
    }
})

//add a new document
router.post('/newcourse',verifyToken,async(req,res)=>{
    try {
            console.log(req)
            var item=req.body;
            const datasave=new courseModel(item);
            console.log(item)
            const saveddata= await datasave.save();
            res.send('Post successful');
       
    } catch (error) {
        console.log(error)
    }
})

//delete a document
router.delete('/courseremoval/:id',verifyToken,async(req,res)=>{
    try {
        await courseModel.findByIdAndDelete(req.params.id);
    res.send('Deleted successfully')
    } catch (error) {
        console.log(error)
    }
    
})
//update a document
router.put('/course-updation/:id',verifyToken,async (req,res)=>{
    try {
     const data= await courseModel.findByIdAndUpdate(req.params.id,req.body);
     res.send('Updated successfully')
    } catch (error) {
     console.log(error)
    }
 })

module.exports=router;
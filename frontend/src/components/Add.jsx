import React, { useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios'
import {useNavigate,useLocation} from 'react-router-dom'
import axiosInstance from '../axiosinteceptor';
import Navbar from './Navbar';

const Add = () => {
  const [form,setForm]=useState(
    {
      courseId:'',
      courseName:'',
      category:'',
      description:'',
      duration:'',
      fee:''

    }
  )

 var navigate=useNavigate();
 
  function valueFetch(e)
  {
    //console.log(e)
    setForm({...form,[e.target.name]:e.target.value})
  }

  const location=useLocation()
  let sendData=()=>{
   // console.log(form)
   if (location.state!=null) {
    axiosInstance.put('http://localhost:4000/api/course-updation/'+location.state.course._id,form).then((res)=>{
      alert('Data updated');
      navigate('/courses')
    }).catch((error)=>{
      console.log(error);
    })
  } 
  else{
    console.log(form)
    axiosInstance.post('http://localhost:4000/api/newcourse',form).then((res)=>{
     // alert('Data added')
      navigate('/courses')
   
    }).catch((error)=>{
      console.log(error)
    })
  }
}
useEffect(()=>{
  if(location.state!=null){
    setForm({...form,
      courseId:location.state.course.courseId,
      courseName:location.state.course.courseName,
      category:location.state.course.category,
      description:location.state.course.description,
      duration:location.state.course.duration,
      fee:location.state.course.fee,
    })
  }
},[])
  return (
    <>
    <Navbar/>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required - Course Id"
         // defaultValue="Hello World"
         name="courseId"
         value={form.courseId}
         onChange={valueFetch}
        />
        <br/>
        <TextField
           required
           id="outlined-required"
           label="Required- Course Name"
           name="courseName"
           value={form.courseName}
           onChange={valueFetch}
        />
        <br/>
        <TextField
          required
          id="outlined-required"
          label="Required - category"
          name="category"
          value={form.category}
          onChange={valueFetch}
        />
        <br/>
        <TextField
          required
          id="outlined-required"
          label="Required - Description"
          name="description"
          value={form.description}
          onChange={valueFetch}
        />
        <br/>
        <TextField
          required
          id="outlined-required"
          label="Required - Duration"
          name="duration"
          value={form.duration}
          onChange={valueFetch}
        />
        <br/>
        <TextField
          required
          id="outlined-required"
          label="Required - Fee"
          name="fee"
          value={form.fee}
          onChange={valueFetch}
        />
        <br/>
        <Button variant="contained" color="success" onClick={sendData}>
  Submit
</Button>
<br/>

          </div>
          </Box>
          </>
  )
}
export default Add
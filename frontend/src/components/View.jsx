import React, { useEffect, useState } from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Table } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosinteceptor';
import Navbar from './Navbar';


const View = () => {
    const [rows,setRows]=useState([])
    
    useEffect(()=>{
        axiosInstance.get('http://localhost:4000/api/courses').then((res)=>{
            //console.log(res);
            setRows(res.data);
          })

    },[])
    
    function deleteCourse(p)
    {
      axiosInstance.delete('http://localhost:4000/api/courseremoval/'+p).then((res)=>{
        alert('Data deleted');
        window.location.reload()
       
      }).catch((error)=>{
        console.log(error)
      })
    
    }
     const navigate=useNavigate()
    function updateCourse(course) {
      navigate('/add',{state:{course}})
    }

  return (
    <>
    <Navbar/>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Course Name</TableCell>
          <TableCell align="right">Category</TableCell>
          <TableCell align="right">Duration</TableCell>
         
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.courseId}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.courseName}
            </TableCell>
            <TableCell align="right">{row.category}</TableCell>
            <TableCell align="right">{row.duration}</TableCell>
          
            <TableCell align="right"><Button variant="contained" color="secondary" onClick={()=>{
      updateCourse(row)
    }}>
 Edit
</Button></TableCell>
            <TableCell align="right"><Button variant="contained" color="error" onClick={()=>{
      deleteCourse(row._id)
    }}>
  Delete
</Button></TableCell>
           </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </>
  )
}

export default View
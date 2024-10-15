import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import View from './components/View'
import {Routes,Route} from 'react-router-dom'
import Add from './components/Add'
import Login from './components/Login'
import PrivateRoutes from './components/PrivateRoutes'

function App() {
 
  return (
    <>
     
     <Routes>
     <Route path='/' element={<Login/>}></Route>
     <Route element={<PrivateRoutes/>}>
      <Route path='/courses' element={<View/>}></Route>
      <Route path='/add' element={<Add/>}></Route>
      </Route>
     </Routes>
    </>
  )
}

export default App

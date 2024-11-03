import { useState } from 'react'
import Signup from './pages/Signup'
import { Route,Routes } from 'react-router-dom'
import './index.css'
import React from 'react'
import Otp from './pages/Otp'
import Signin from './pages/Signin'
// import 

function App() {
  
  return (
    <div>
         <Routes>
            <Route path="/signup" element={<Signup/>}  />  
            <Route path="/signin" element={<Signin/>}  />   
            <Route path="/otp" element={<Otp/>}  />          
         </Routes> 
    </div>
  )
}

export default App




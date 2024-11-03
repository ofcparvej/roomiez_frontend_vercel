import React from 'react'
import { useState } from 'react';
import axios from "axios";

const Signin = () => {


const [email , setEmail] = useState('');
const [password , setPassword] = useState('');



  const handleSubmit = async (e) => {
    const user = {
                  email,
                  password,
                   }
      console.log("res::B " , user)
      e.preventDefault();
      // const user = {email,otp}
      try {
       const res= await axios.post("http://localhost:7000/api/v1/auth/signin",user)
  
       console.log("res:: " , res)
  
        res.data && window.location.replace("/home");
        console.log("User created" , user)
      } catch (error) {
        console.log(error)
      }
    };


  return (
    <>

        <div className=" text-red-400 text-md font-bold underline">
            Hello Signup
        </div>
    

         <div>
         <form className="flex flex-col">
         <input type="text" value={email} className="rounded-3xl h-10 px-3 my-3 outline-none  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
         <input type="password" value={password} className="rounded-3xl h-10 px-3 my-3 outline-none  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/> 
         </form> 
         <div className="flex  "> 
         <button className="px-8 rounded-3xl py-3 border-2 hover:bg-[#303030] border-[#303030]" onClick={handleSubmit} >Sign Up</button>
         </div>
         </div>


    </>
  )
}

export default Signin
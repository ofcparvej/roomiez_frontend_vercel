import React from 'react'
import { useState } from 'react';
import axios from "axios";

const Signup = () => {

  const [firstName , setfirstName] = useState('');
  const [lastName , setlastName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [confirmedPassword , setconfirmedPassword] = useState('');
  const [accountType , setaccountType] = useState('');
  const [contactNumber , setcontactNumber] = useState('');
  const [otp , setOtp] = useState('');


  const handleSubmit = async (e) => {
    const user = {firstName,
                  lastName,
                  email,
                  password,
                  confirmedPassword,
                  accountType,
                  contactNumber,
                  otp
                   }
      console.log("res::B " , user)
      e.preventDefault();
      // const user = {email,otp}
      try {
       const res= await axios.post("http://localhost:7000/api/v1/auth/signup",user)
  
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
         <input type="text" value={firstName} className="rounded-3xl h-10 px-3 my-3 outline-none  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100" placeholder="firstName" onChange={(e)=>{setfirstName(e.target.value)}}/>
         <input type="text" value={lastName} className="rounded-3xl h-10 px-3 my-3 outline-none  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100" placeholder="lastName" onChange={(e)=>{setlastName(e.target.value)}}/>
         <input type="text" value={email} className="rounded-3xl h-10 px-3 my-3 outline-none  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
         <input type="password" value={password} className="rounded-3xl h-10 px-3 my-3 outline-none  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/> 
         <input type="password" value={confirmedPassword} className="rounded-3xl h-10 px-3 my-3 outline-none  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100" placeholder="confirmedPassword" onChange={(e)=>{setconfirmedPassword(e.target.value)}}/>
         <input type="text" value={accountType} className="rounded-3xl h-10 px-3 my-3 outline-none  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100" placeholder="accountType" onChange={(e)=>{setaccountType(e.target.value)}}/>
         <input type="text" value={contactNumber} className="rounded-3xl h-10 px-3 my-3 outline-none  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100" placeholder="contactNumber" onChange={(e)=>{setcontactNumber(e.target.value)}}/>
         <input type="text" value={otp} className="rounded-3xl h-10 px-3 my-3 outline-none  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100" placeholder="otp" onChange={(e)=>{setOtp(e.target.value)}}/> 
         </form> 
         <div className="flex  "> 
         <button className="px-8 rounded-3xl py-3 border-2 hover:bg-[#303030] border-[#303030]" onClick={handleSubmit} >Sign Up</button>
         </div>
         </div>


    </>
  )
}

export default Signup

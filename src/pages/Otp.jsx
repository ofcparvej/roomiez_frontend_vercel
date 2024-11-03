import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import axios from "axios";

const Otp = () => {

  const [otp , setOtp] = useState('');
  const [email , setEmail] = useState('');

//   console.log("otp=> " , otp)

//   const sendOtp = async () => {
//     try {
//       const res = await axios.post(
//         "http://localhost:7000/api/v1/auth/sendotp"
//       );
//       setCarousel(res.data.results);
//     } catch (error) {
//       console.error("Error fetching carousel data:", error);
//     }
//   };

      
// useEffect(() => {
//     const fetchData = async () => {
//       try {

//         await sendOtp();

//       } catch (error) {

//         console.error("Error fetching data:", error);
        

//       }
//     };

//     fetchData();
//   }, []);

//.................................................................

const handleSubmit = async (e) => {
  const user = {email,otp}
    console.log("res::B " , user)
    e.preventDefault();
    // const user = {email,otp}
    try {
     const res= await axios.post("http://localhost:7000/api/v1/auth/sendotp",{email:email})

     console.log("res:: " , res)

      res.data && window.location.replace("/signup");
      console.log("User created" , user)
    } catch (error) {
      console.log(error)
    }
  };

  // useEffect(()=>{
  //                axios.post("http://localhost:7000/api/v1/auth/sendotp" , {email:email})
  //               .then((res) => {console.log("ress=" , res)});
  // },[])

                       
             
         
  return (
    <>
          <div className=" text-red-400 text-md font-bold underline">
              Hello Signup
          </div>
    
         <div>
         <form className="flex flex-col">
         <input type="email" value={email} className="rounded-3xl h-10 px-3 my-3 outline-none  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
         <input type="text" value={otp} className="rounded-3xl h-10 px-3 my-3 outline-none  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100" placeholder="Otp" onChange={(e)=>{setOtp(e.target.value)}}/>
         </form>
         <div className="flex  "> 
         <button className="px-8 rounded-3xl py-3 border-2 hover:bg-[#303030] border-[#303030]" onClick={handleSubmit}  >Otp</button>
         </div>
         </div>


    </>
  )
}

export default Otp
import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logInUser } from "../store/slices/authSlice";


const Signin = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');



  const handleSubmit = async (e) => {

    const user = {
                  email,
                  password,
                }

      e.preventDefault();
      try {
      const res= await axios.post("https://roomiez-backend-deployment.onrender.com/api/v1/auth/signin",user)
      let token11 = res.data.token;
      localStorage.setItem('token11', token11);
      const {email , accountType} = res.data;
      const response = { email , accountType };
      dispatch(logInUser(response));
      res.data && navigate("/home");
      } catch (error) {
        console.log(error)
      }
  };


  return (
    <>
      <div className='h-screen bg-gray-200 overflow-y-hidden     '>
          <div className='   top-0   flex items-center shadow-lg h-[70px]   md:h-[105px] bg-slate-200  z-10 sticky   border  flex-row  justify-between ' >
              <div className='relative top-2  sm:left-12    md:left-[100px] '>
                  <img className='md:h-[260px] md:w-[260px] h-[200px] w-[200px]   ' src='https://res.cloudinary.com/dsjecjjig/image/upload/v1736416741/phd6yxxfulcqskyvemcd.png' />
              </div>
              <div className='relative flex flex-row justify-between px-[100px] md:gap-32  gap-10  '>
                {/* <div className='relative md:text-2xl '> <button>Docs</button></div> */}
                {/* <div className='relative md:text-2xl  '> <button>About Us</button></div> */}
              </div>
          </div>
          <div className='min-h-screen'>
            <div className='relative flex flex-col   gap-[70px] ' >
                  <div className='relative top-[70px] flex justify-center items-center  '>
                      <div className='   sm:text-center text-3xl   relative  bg-gray-200 h-[200px] md:text-7xl text-center md:text-center'>
                          Welcome! We're excited to have you join our community.
                      </div>
                  </div>
                  <div>
                   <>
                     <div class=" md:flex md:flex-row  md:justify-center md:items-center md:space-x-2  bg-gray-200   flex items-center justify-center  " >
                          <div className=' md:flex md:border md:h-[300px] md:w-2/3 md:items-center md:justify-center bg-white shadow-md  w-4/5 flex justify-center items-center h-[500px] '>
                            <div className='flex flex-col  w-[400px]'>
                              <input type="text" value={email}  className=" h-7 px-3 my-3 outline-none  bg-gray-100  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-200 hover:border-gray-700   text-center font-light" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                              <input type="password" value={password} className=" h-7 px-3 my-3 outline-none  bg-gray-100  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-200 hover:border-gray-700   text-center font-light" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/> 
                              <button className='relative border bg-slate-400 border-gray-200 hover:border-gray-700  text-white font-light '  onClick={handleSubmit } >Sign In</button>
                              <button className='relative bg-slate-300  rounded-md top-4  ' onClick={()=>{navigate("/admin/signin" )}}> Login As An Admin </button>
                            </div>
                          </div>
                     </div>
                    </>
                  </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default Signin
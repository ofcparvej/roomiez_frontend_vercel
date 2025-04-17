import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';


const Admin = () => {
  const navigate = useNavigate();
  history.pushState(null, null, location.href);
  window.onpopstate = function(event) {
    history.go(1);
  };

    const data = useSelector((state) => state.auth);

    if(data.accountType==""){
     navigate("/");
    }

  // const navigate = useNavigate();
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  const handleSubmit = async (e) => {
    const user = {
                  email,
                  password,
                   }
      console.log("res::B " , user)
      e.preventDefault();
      try {
       const res= await axios.post("https://roomiez-backend-deployment.onrender.com/api/v1/auth/signin",user)
       
       let token11 = res.data.token;
       localStorage.setItem('token11', token11);

        if(res.data.accountType == 'Admin'){
          navigate("/admin");
        }

      } catch (error) {
        console.log(error)
      }
    };


  return (
    <>
      <div className='h-screen bg-gray-200 overflow-y-hidden     '>
          <div className='   top-0   flex items-center shadow-lg   h-[135px] bg-slate-200  z-10 sticky   border  flex-row  justify-between ' >   
              <div className=' relative top-2    left-[100px] '>
                  <img className='h-[300px] w-[300px]  ' src='https://res.cloudinary.com/dsjecjjig/image/upload/v1736416741/phd6yxxfulcqskyvemcd.png' />
              </div>
              <div className='relative flex flex-row justify-between px-[100px] gap-32  '>
                <div className='relative text-2xl '> <button>Docs</button></div>
                <div className='relative text-2xl  '> <button>Home</button></div>
                <div className='relative text-2xl  '> <button>About Us</button></div>
              </div>
          </div>
      
          <div className='min-h-screen'>
            <div className='relative flex flex-col  gap-[10px] ' >
                  <div className='relative top-[70px] flex justify-center items-center  '>
                        <div className='relative  bg-gray-200 h-[200px] text-5xl'>
                          Welcome! We're excited to have you join our community.
                      </div>
                  </div>
                  <div>
                    <>
                      <div class="relative flex flex-row  justify-center items-center space-x-2  bg-gray-200   " >
                        <div className=' flex border h-[500px] w-2/3 items-center justify-center bg-white shadow-md '>
                            <div className='flex flex-col'>
                            <input type="text" value={email}  className=" h-7 px-3 my-3 outline-none  bg-gray-100  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-200 hover:border-gray-700   text-center font-light" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                            <input type="password" value={password} className=" h-7 px-3 my-3 outline-none  bg-gray-100  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-200 hover:border-gray-700   text-center font-light" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/> 
                            <button className='relative border bg-slate-400 border-gray-200 hover:border-gray-700  text-white font-light '  onClick={handleSubmit } >Sign In</button> 
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

export default Admin
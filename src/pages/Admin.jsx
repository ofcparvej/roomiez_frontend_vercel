import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { logInUser } from '../store/slices/authSlice';


const Admin = () => {
  const navigate = useNavigate();
  history.pushState(null, null, location.href);
  window.onpopstate = function(event) {
    history.go(1);
  };

  // const navigate = useNavigate();
  const dispatch = useDispatch();

    const data = useSelector((state) => state.auth);

    // if(data.accountType==""){
    //  navigate("/");
    // }

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
      //  dispatch(logInUser(response));
           const {email , accountType} = res.data;
            const response = { email , accountType };
            dispatch(logInUser(response));
            res.data && navigate("/admin");

        // if(res.data.accountType == 'Admin'){
        //   navigate("/admin");
        // }

      } catch (error) {
        console.log(error)
      }
    };


  return (
    <>
      <div className='h-screen bg-gray-200 overflow-y-hidden    '>
          <div className='   top-0   flex items-center shadow-lg   h-[90px] bg-slate-200  z-10 sticky   border  flex-row  justify-between  w-screen' >   
              <div className='relative top-2  sm:left-12    md:left-[100px] '>
                  <img className='h-[210px] w-[210px]  ' src='https://res.cloudinary.com/dsjecjjig/image/upload/v1736416741/phd6yxxfulcqskyvemcd.png' />
              </div>
              {/* <div className='relative flex flex-row justify-between px-[100px] gap-32  '> */}
                {/* <div className='relative text-2xl '> <button>Docs</button></div> */}
                {/* <div className='relative text-2xl  '> <button>Home</button></div> */}
                {/* <div className='relative text-2xl  '> <button>About Us</button></div> */}
              {/* </div> */}
          </div>
      
          <div className='  hidden md:block     min-h-screen'>
            <div className='relative flex flex-col md:gap-[70px]  gap-[-10px]   ' >
                  <div className='relative top-[70px] flex justify-center items-center '>
                        <div className=' sm:text-center text-3xl   relative  bg-gray-200 h-[200px] md:text-7xl text-center md:text-center'>
                          Welcome! We're excited to have you join our community.
                      </div>
                  </div>
                  {/* <div> */}
                    {/* <> */}
                      <div class="relative md:flex md:flex-row  md:justify-center md:items-center md:space-x-2   bg-gray-200   flex items-center justify-center  h-[50px] top-20 " >
                        <div className=' relative md:flex md:border md:h-[300px] md:w-2/3 md:items-center md:justify-center bg-white shadow-md  w-[450px] flex justify-center items-center h-[300px] md:top-0 top-[10px]   '>
                            <div className='flex flex-col  w-[400px]'>
                            <input type="text" value={email}  className=" h-7 px-3 my-3 outline-none  bg-gray-100  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-200 hover:border-gray-700   text-center font-light" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                            <input type="password" value={password} className=" h-7 px-3 my-3 outline-none  bg-gray-100  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-200 hover:border-gray-700   text-center font-light" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/> 
                            <button className='relative border bg-slate-400 border-gray-200 hover:border-gray-700  text-white font-light '  onClick={handleSubmit } >Sign In</button> 
                            </div>
                        </div>
                      </div>

                    {/* </> */}
                  {/* </div> */}
                  </div>
          </div>

                    <div className='  sm:hidden min-h-screen w-screen'>
            <div className='relative flex flex-col md:gap-[70px]     ' >
                  <div className='relative top-[70px] flex justify-center items-center '>
                        <div className=' sm:text-center text-3xl   relative  bg-gray-200 h-[200px] md:text-7xl text-center md:text-center'>
                          Welcome! We're excited to have you join our community.
                      </div>
                  </div>
                  {/* <div> */}
                    {/* <> */}
                      {/* <div class="relative md:flex md:flex-row  md:justify-center md:items-center md:space-x-2   bg-gray-500   flex items-center justify-center  h-[50px] top-36   " > */}
                        <div className=' relative md:flex md:border md:h-[300px] md:w-2/3 md:items-center md:justify-center bg-white ml-2 mr-2 shadow-md  screen flex justify-center items-center h-[300px] md:top-0 top-[10px]    '>
                            <div className='flex flex-col  items-center   '>
                            <input type="text" value={email}  className=" h-7 px-3 my-3 outline-none  bg-gray-100  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-200 hover:border-gray-700    text-center font-light w-[300px] " placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                            <input type="password" value={password} className=" h-7 px-3 my-3 outline-none  bg-gray-100  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-200 hover:border-gray-700   text-center font-light w-[300px]" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/> 
                            <button className='relative border bg-slate-400 border-gray-200 hover:border-gray-700  text-white font-light  w-[300px]  '  onClick={handleSubmit } >Sign In</button> 
                            </div>
                        </div>
                      {/* </div> */}

                    {/* </> */}
                  {/* </div> */}
                  </div>
          </div>
        </div>
                    
    </>
  )
}

export default Admin
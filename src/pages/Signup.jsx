import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Signup = () => {



  const navigate = useNavigate()
  //...............................................................
  const [firstName , setfirstName] = useState('');
  const [lastName , setlastName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [confirmedPassword , setconfirmedPassword] = useState('');
  const [accountType , setaccountType] = useState('');
  const [contactNumber , setcontactNumber] = useState('');
  const [otp , setOtp] = useState('');
  const [key , setKey ] = useState('');

  //...................
  const [value , setValue] = useState('');
  const options = [
    'Admin' ,
    'Student',
    'Contributor'
  ]

  function handleSelect(event){
    setValue(event.target.value);
    setaccountType(event.target.value);
  }

  //................

  const handleSubmit = async (e) => {

    const user = {firstName,
                  lastName,
                  email,
                  password,
                  confirmedPassword,
                  accountType,
                  contactNumber,
                  otp,
                  key
                   }

                   
      e.preventDefault();

      try {

        const res= await axios.post("https://roomiez-backend-deployment.onrender.com/api/v1/auth/signup",user)
        console.log(res.data);
        res.data && navigate("/signin") ;

      } catch (error) {
        console.log(error)
      }
    };

  const notify = () => toast.success("Otp sent successfully !");

  //..........................................................

    const handleSubmitOtp = async (e) => {

        e.preventDefault();

        try {
        const res= await axios.post("https://roomiez-backend-deployment.onrender.com/api/v1/auth/sendotp",{email:email})
          res.data && notify() ;
        } catch (error) {
          console.log(error)
        }
      };

  //...................................................................

  return (
    <>
      <div className='max-h-screen bg-gray-200 overflow-y-hidden     '>
        <div className='   top-0   flex items-center shadow-lg h-[70px]   md:h-[135px] bg-slate-200  z-10 sticky   border  flex-row  justify-between ' >   
          <div className=' relative top-2  sm:left-12    md:left-[100px] '>
                <img className='md:h-[300px] md:w-[300px] h-[200px] w-[200px]  ' src='https://res.cloudinary.com/dsjecjjig/image/upload/v1736416741/phd6yxxfulcqskyvemcd.png' />
          </div>
          <div className='relative flex flex-row justify-between px-[100px] md:gap-32  gap-10 '>
              <div className='relative md:text-2xl  '> <button>Docs</button></div>
              <div className='relative md:text-2xl   '> <button>About Us</button></div>
          </div>
        </div>
        <div className='min-h-screen'>
          <div className='relative flex flex-col  top-6  md:gap-7 ' >
            <div className='relative top-4 md:top-[70px] flex justify-center items-center  '>
              <div className='    relative  bg-gray-200 h-[200px] text-2xl md:text-6xl text-center md:text-center  '>
                  Welcome! We're excited to have you join our community.
              </div>
            </div>
            <div className='relative flex justify-center items-center  md:top-0 top-[-120px]    '>
              <div class="  relative md:flex flex-col  gap-10  w-screen    md:flex-row  md:justify-center md:items-center md:space-x-2  bg-slate-200  md:bottom-[30px]  flex justify-center items-center   " >
                <div className='  relative flex border  w-5/6  md:h-[550px]  md:w-2/3 items-center justify-center bg-white shadow-md '>
                  <div className='flex flex-col'>
                    <input type="text" value={firstName} className=" h-7 px-3 my-3 outline-none  bg-gray-100  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-200 hover:border-gray-700   text-center font-light" placeholder="First Name" onChange={(e)=>{setfirstName(e.target.value)}}/>
                    <input type="text" value={lastName} className=" h-7 px-3 my-3 outline-none  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-200 hover:border-gray-700 text-center font-light" placeholder="Last Name" onChange={(e)=>{setlastName(e.target.value)}}/>
                    <input type="text" value={email} className=" h-7 px-3 my-3 outline-none  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-200 hover:border-gray-700 text-center font-light" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input type="password" value={password} className=" h-7 px-3 my-3 outline-none  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-200 hover:border-gray-700 text-center font-light" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                    <input type="text" value={accountType} className=" h-7 px-3 my-3 outline-none  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-200 hover:border-gray-700 text-center  font-light" placeholder="Account Type" onChange={(e)=>{setaccountType(e.target.value)}}/>
                    <select className='form-select' onChange={handleSelect}>
                      {
                        options.map(option => (
                          <option value = {option}>{option}</option>
                        ))
                      }
                    </select>
                    {
                      accountType == 'Admin' && <input type="text" value={key} className=" h-7 px-3 my-3 outline-none  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-200 hover:border-gray-700 text-center font-light" placeholder="Enter Admin Key" onChange={(e)=>{setKey(e.target.value)}}/> 
                    }
                    <input type="text" value={contactNumber} className=" h-7 px-3 my-3 outline-none  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-200 hover:border-gray-700 text-center font-light" placeholder="Contact Number" onChange={(e)=>{setcontactNumber(e.target.value)}}/>
                    <input type="password" value={confirmedPassword} className=" h-7 px-3 my-3 outline-none  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-200 hover:border-gray-700 font-light" placeholder="Confirmed Password" onChange={(e)=>{setconfirmedPassword(e.target.value)}}/>
                    <input type="text" value={otp} className=" h-7 px-3 my-3 outline-none  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-200 hover:border-gray-700 text-center font-light" placeholder="Otp" onChange={(e)=>{setOtp(e.target.value)}}/> 
                    <button className='relative border bg-slate-400 border-gray-200 hover:border-gray-700  text-white font-light'  onClick={handleSubmit } >Sign Up</button>
                    <ToastContainer autoClose={10000} />
                  </div>
                </div>
                <div className=' relative flex border w-5/6 md:h-80  md:w-2/3   items-center justify-center bg-white shadow-md'>
                    <div className='flex flex-col'>
                      <input type="text" value={email} className=" h-7 px-3 my-3 outline-none  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-200 hover:border-gray-700 text-center font-light" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                      <button className='relative border bg-slate-400 border-gray-200 hover:border-gray-700  text-white font-light '  onClick={handleSubmitOtp } >Get Otp</button>
                      <ToastContainer autoClose={10000} />
                    </div>
                </div>
              </div>   
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup

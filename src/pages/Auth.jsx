import React from 'react'
import { useNavigate } from 'react-router-dom'



const Auth = () => {

  let navigate = useNavigate();

  history.pushState(null, null, location.href);
  window.onpopstate = function(event) {
    history.go(1);
  };

  return (
    <div >
        <div class="flex flex-row min-h-screen justify-center items-center  ">
          <div className='relative flex flex-col justify-center items-center gap-16'>
                 <div className='  lg:text-9xl text-4xl text-center md:text-center '>  Welcome To   <span></span> Roomies  </div>
                 <div className='bg-slate-500  sm:text-center  lg:text-4xl bg-opacity-10 rounded-lg hover:shadow-md text-center md:text-center   '>
                    a student-focused accommodation platform that connects college-goers with available rooms close to their institutions.
                 </div>
                  <div className='flex flex-row space-x-6 border h-[100px] w-[400px] items-center justify-center transition duration-300 ease-in-out hover:shadow-md gap-6  '>                  
                        <button className='bg-slate-300 w-[80px] h-[45px] rounded-md  hover:border' onClick={()=>{navigate("/signup" )}}  > Singup </button>
                        <button className='bg-slate-300 w-[80px] h-[45px] rounded-md   hover:border ' onClick={()=>{navigate("/signin" )}}> Login </button>
                  </div>
          </div>
        </div> 
    </div>
  )
}

export default Auth

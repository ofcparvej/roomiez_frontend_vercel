// import React from 'react'
import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import Dummy from './dummy';
import {  useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { logOutUser } from "../store/slices/authSlice";
import Loadingcomponent from './Loadingcomponent';

const Shimmer = () => {

  history.pushState(null, null, location.href);
  window.onpopstate = function(event) {
    history.go(1);
  };

  const [searchText , setSearchText] = useState('');
  const data1 = useSelector((state) => state.auth);

  console.log("DAta => " , data1.accountType);
  if(data1.accountType==""){
  navigate("/");
  }

  const dispatch = useDispatch();
  const colleges  =  [{} , {} , {} , {} , {} , {} ,{} , {} , {} ,{} , {} , {} , ];
  const navigate = useNavigate()

//   if(data1.accountType.length < 1     ){
//     navigate("/");
//   }



  colleges.forEach((item) => {
    console.log(item.collegeCode);
});


const filteredClgs = colleges.filter((res) => res.collegeName==searchText) 

  return (
    <div className='  '>
      {/* <div className = ' z-10 sticky top-0 left-0  border  h-[55px] bg-slate-400 flex flex-row space-x-[15px] justify-center ' > 
        <>
          <div className='    top-0   flex items-center shadow-lg h-[90px] md:h-[90px] bg-slate-200  z-10 sticky  w-screen  border  flex-row  justify-between   ' >   
              <div className=' relative top-2     '>
                  <img className='md:h-[200px] md:w-[200px] h-[200px] w-[200px]  ' src='https://res.cloudinary.com/dsjecjjig/image/upload/v1736416741/phd6yxxfulcqskyvemcd.png' />
              </div>
              <div className='relative flex flex-row justify-between px-[10px] gap-10  '>
               
                <input className=' relative h-8  text-center hover:shadow-md rounded-md ' placeholder='Search' onChange={(e) => {setSearchText(e.target.value.replace(/\s+/g, ''))}}  ></input>
                <div > <button className='relative text-md  text-gray-400 h-8  text-center  rounded-md hover:text-slate-500    ' onClick={ ()=>{  console.log("clicked");    dispatch(logOutUser()) ; navigate("/")    }   }>Logout</button></div>
              </div>
          </div>
        </>
      </div> */}

      <main className=" flex flex-row min-h-screen justify-center items-center    ">
        <div className='  '>
          {
            filteredClgs.length > 0 ? (
              <div>
              </div>
            ):( <div className=' relative  top-10      bg-black bg-opacity-10 '>
              <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* <div className='  '> */}
              {colleges.map((item) => (
               
                <div className='relative top-3 bg-slate-300  animate-pulse  ' style={{ margin:"60px" }}>
                  <Loadingcomponent data ={ item }   />
                </div>
              ))}
               {/* </div>   */}
            </div>
            </div>
            )
          }
        </div>
      </main>
</div>
)
}

export default Shimmer

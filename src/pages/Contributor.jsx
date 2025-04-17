import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import Dummy from './dummy';
import {  useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {useSelector} from 'react-redux';
import { useDispatch } from "react-redux";
import { logOutUser } from "../store/slices/authSlice";

const Contributor = () => {

  history.pushState(null, null, location.href);
  window.onpopstate = function(event) {
    history.go(1);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchText , setSearchText] = useState('');
  const data1 = useSelector((state) => state.auth);

  console.log("DAta => " , data1.accountType);
  if(data1.accountType==""){
  navigate("/");
  }

  const [colleges , setColleges] = useState([{}]);

  useEffect(() => {
    function fetchData() {
      const params = {
        collegeCode: '1002'
      };
      axios.get('https://roomiez-backend-deployment.onrender.com/api/v1/colleges', {  })
      .then(response => {
        setColleges(response.data.found_colleges);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
    
    fetchData();
  }, []);
  

   colleges.forEach((item) => {
      console.log(item.collegeCode);
  });
  

  const filteredClgs = colleges.filter((res) => res.collegeName==searchText) 


  return (
    <div className=' bg-gray-200  '>
      <div className = ' z-10 sticky top-0 left-0  border  h-[55px]  flex flex-row space-x-[150px] justify-center ' >
        <>
          <div className='   top-0   flex items-center shadow-lg w-full   h-[135px] bg-slate-200  z-10 sticky   border  flex-row  justify-between ' >   
              <div className=' relative top-2    md:left-[100px] '>
                  <img className='h-[300px] w-[300px]  ' src='https://res.cloudinary.com/dsjecjjig/image/upload/v1736416741/phd6yxxfulcqskyvemcd.png' />
              </div>
              <div className='relative flex flex-row justify-between px-[100px] gap-32 sm:gap-20   '>
                    <input className=' relative h-8  text-center hover:shadow-md rounded-md ' placeholder='Search' onChange={(e) => {setSearchText(e.target.value.replace(/\s+/g, ''))}}  ></input>
                    <div > <button className='relative text-2xl bg-red-100 h-8  text-center hover:shadow-md rounded-md  ' onClick={ ()=>{   navigate("/"); dispatch(logOutUser()) ;console.log("clicked");  }  }>Reset</button></div>
              </div>
          </div>
        </>
      </div>
      <main className="  flex flex-row min-h-screen justify-center items-center     ">
        <div className='  '>
            {
              filteredClgs.length > 0 ? (
                <div>
                    {filteredClgs.map((item) => (
                    <div  key={uuidv4()} className='relative top-3 bg-slate-400  ' style={{ margin:"60px" }}>
                      <Dummy data ={ item }   />
                    </div>
                    ))}
                </div>
              ):( <div className=' relative  top-10   grid  bg-black bg-opacity-10 grid-cols-3   gap-4 p-4'>
                <ul>
                {colleges.map((item) => (
                  <div className='relative top-3 bg-slate-400  ' style={{ margin:"60px" }}>
                    <Dummy data ={ item }   />
                  </div>
                ))}
              </ul>
              <ul>
                {colleges.map((item) => (
                  <div className='relative top-3 bg-slate-400 ' style={{ margin:"60px" }}>
                    <Dummy data ={ item }   />
                  </div>
                ))}
              </ul>
              <ul>
                {colleges.map((item) => (
                  <div className='relative top-3 bg-slate-400 ' style={{ margin:"60px" }}>
                    <Dummy data ={ item }   />
                  </div>
                ))}
              </ul>
              </div>
              )
            }
        </div>
      </main>
</div>
)
  
}

export default Contributor

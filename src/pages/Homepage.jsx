import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import Dummy from './dummy';
import {  useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {useSelector} from 'react-redux';

const Homepage = () => {



  const [searchText , setSearchText] = useState('');
  const [data , setData] = useState('') ;
  const [colleges , setColleges] = useState([{}]);
  const navigate = useNavigate()
  const data1 = useSelector((state) => state.auth);
    
  console.log("DAta => " , data1.accountType);
  // if(data1.accountType==""){
  //   navigate("/");
  // }
  

  useEffect(() => {
    function fetchData() {
      axios.get('https://roomiez-backend-deployment.onrender.com/api/v1/colleges')
      .then(response => {
        setColleges(response.data.found_colleges);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
    fetchData();
  }, []);

  const obj = data;
  colleges.forEach((item) => {
    console.log(item.collegeCode);
  });


 const filteredClgs = colleges.filter((res) => res.collegeName==searchText) 

  return (
    <div className='   '>
        <div className = ' z-10 sticky top-0 left-0  border  h-[55px] bg-slate-400 flex flex-row space-x-[150px] justify-center sm:space-x-[100px]  ' >
          <>
            <div className='   top-0   flex items-center shadow-lg w-screen   h-[90px] bg-slate-200  z-10 sticky   border  flex-row  justify-between ' >   
              <div className=' relative top-2  sm:left-[50px]   left-[100px] '>
                  <img className='h-[210px] w-[210px]  ' src='https://res.cloudinary.com/dsjecjjig/image/upload/v1736416741/phd6yxxfulcqskyvemcd.png' />
              </div>
              <div className='relative flex flex-row justify-between px-[100px] gap-32  '>
                <div  className='relative text-md  text-gray-400 h-8  text-center  rounded-md hover:text-slate-500  ' > <button onClick={()=>{navigate("/addcollege")}}>Add New College</button></div>
                <div   className='rrelative text-md  text-gray-400 h-8  text-center  rounded-md hover:text-slate-500  ' > <button onClick={()=>{navigate("/addlocations")}}>Add New Location</button></div>
                <div  className='relative   '>
                  <input className='relative h-8  text-center hover:shadow-md rounded-md ' placeholder='Search' onChange={(e) => {setSearchText(e.target.value.replace(/\s+/g, ''))}}  ></input>
                </div>
              </div>
            </div>
            </>
        </div>
        <main className=" flex flex-row min-h-screen justify-center items-center   ">
          <div className='  '>
            {
              filteredClgs.length > 0 ? (
                <div>
                  {filteredClgs.map((item) => (
                    <div  key={uuidv4()} className='relative top-3 bg-black bg-opacity-10 ' style={{ margin:"60px" }}>
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
              </div>)
            }
          </div>
        </main>
    </div>
  )
}

export default Homepage

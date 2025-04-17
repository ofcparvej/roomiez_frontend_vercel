import React from 'react'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react';
import axios from 'axios';
import LocationsComponent from '../components/LocationsComponent';
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import {  logOutUser } from "../store/slices/authSlice";


const Locations = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector((state) => state.auth);
    const Type = data.accountType;
    const [searchText , setSearchText] = useState('');
    // const [vec , setVec] = useState([{}])
    const {collegeCode} = useParams();

    const params = {
      collegeCode:collegeCode
    }

    const [locations , setLocations] = useState([])

    useEffect(() => {
      axios.get("https://roomiez-backend-deployment.onrender.com/api/v1/loc/alldetails" , {params})
      .then((res)=>{
        setLocations(res.data.Locations);
      })
    } , [])

  const filteredLocations = locations.filter((res) => res.locationAddress.trim().replace(/\s+/g, '').toLowerCase().includes(searchText.toLowerCase())) 

  return (
    <>
    <div  className=''>
      <div className = ' z-10 sticky top-0 left-0  border h-[135px]   md:h-[135px] bg-slate-400 flex flex-row  md:space-x-[150px] justify-center  w-screen ' >
        <div className='' >
            <div className='     top-0   flex items-center shadow-lg h-[135px] md:h-[135px] bg-slate-200  z-10 sticky   border  flex-row  justify-between w-screen  ' >   
              <div className='    top-0   flex items-center  h-[135px]   md:h-[135px] bg-slate-200  z-10 sticky   border  flex-row  justify-between '>
                    <img className='md:h-[300px] md:w-[300px] h-[200px] w-[200px]   ' src='https://res.cloudinary.com/dsjecjjig/image/upload/v1736416741/phd6yxxfulcqskyvemcd.png' />
              </div>
              <div className='  mr-9    relative flex flex-row justify-between md:px-[100px] md:gap-20  gap-6 '>
              { (Type == "Admin" )? (  <div > <button className='relative text-2xl hover:text-slate-400' onClick={()=>{navigate("/addcollege")}}>Add New College</button></div> ):(<div></div>)  }
              { (Type != "Student" )? (  <div > <button className='relative text-2xl hover:text-slate-400 ' onClick={()=>{navigate("/addlocations")}}>Add New Location</button></div> ):(<div></div>)  }
              <div className='relative text-2xl hover:text-slate-400   ' onClick={()=>{navigate("/home")}}> <button >Home</button></div>
              <div className='relative'> <input className=' relative h-8  text-center hover:shadow-md rounded-md ' placeholder='Search' onChange={(e) => {setSearchText(e.target.value.replace(/\s+/g, ''))}}  ></input> </div>
              <div className='relative' > <button className='relative text-2xl bg-red-100 h-8  text-center hover:shadow-md rounded-md   ' onClick={ ()=>{   navigate("/"); dispatch(logOutUser()) ;console.log("clicked");  }  }>LogOut</button></div>
              </div>
            </div>
        </div>
      </div>
      <main className='relative top-[100px]'>
        <div >
          <div  className='   '>
            {
              filteredLocations.length > 0 ? (
                    <div>
                    <ul className='grid grid-cols-5   gap-4 p-4' >
                          {filteredLocations.map(loc => (
                            <div key={uuidv4()}>
                                <LocationsComponent ids ={loc}/>
                            </div>
                          ))}  
                        </ul>  
                    </div>
              ):(
                <div>
                  <ul className='grid grid-cols-5   gap-4 p-4' >
                        {locations.map(location => (
                          <div key={uuidv4()}>  
                              <LocationsComponent ids ={location}/>
                          </div>
                        ))}  
                      </ul>  
                </div>
              )
            }
          </div>
        </div>
      </main>
    </div>
    </>
  )
}

export default Locations

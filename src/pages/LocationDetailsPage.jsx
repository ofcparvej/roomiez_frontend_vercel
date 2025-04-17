import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ImageCarousel from '../components/ImageCarousel';
import { useRef } from 'react';
import Loc from '../components/Loc';
import { Tooltip  } from "@material-tailwind/react";
import {useSelector} from 'react-redux';
import { Link } from 'react-scroll';

const LocationDetailsPage = () => {

  const data = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const currUser = data.email;
  const [lat , setLat] = useState();
  const [lng , setLgn] = useState();
  const [houseOwnerName , setHouseOwnerName]=useState();
  const [contactNumber , setContactNumber]=useState();
  const [distance , setDistance] = useState();
  const [expectedRent , setExpectedRent] = useState();
  const [locationAdress , setLocationAdress] = useState();
  const [desc , setDesc] = useState();
  const [locId , setLocId] = useState();
  const [avail , setAvail] = useState();
  const [contributor , setContributor] = useState('');
  const [isChecked, setIsChecked] = useState(false);


  const handleRemove = () => {
    async function removeLoc(){
      const lodD = {
        locId
      }
      try {
      const res= await axios.post("https://roomiez-backend-deployment.onrender.com/api/v1/loc/remove",lodD)
      } catch (error) {
        console.log(error)
      }
    }
      removeLoc() && navigate("/home")
  };


  const handleChange = () => {
    setIsChecked(!isChecked);
    async function updateStatus(){
        const lodD = {
          locId,
          isChecked
        }
      try {
        const res= await axios.post("https://roomiez-backend-deployment.onrender.com/api/v1/loc/updatestatus",lodD)
      } catch (error) {
        console.log(error)
      }
    }
    updateStatus() && localStorage.setItem('newVal', (!isChecked)); ;
  };

  const myRef=useRef(null)
  const {currLocationid} = useParams();
  const [urls , setUrls]  = useState([]);

  useEffect(() => {
    const storedValue = localStorage.getItem('newVal');
    async function fetchData() {
      const params = {
        currLocationid:currLocationid
      }
      await axios.get('https://roomiez-backend-deployment.onrender.com/api/v1/loc/locimgs', { params })
      .then(response => {
        console.log("res R  res=>",response.data.foundLoc[0]);
        setHouseOwnerName(response.data.foundLoc[0].houseOwnerName);
        setContactNumber(response.data.foundLoc[0].contactNumber );
        setDistance(response.data.foundLoc[0].distance);
        setExpectedRent(response.data.foundLoc[0].expectedRent);
        setLocationAdress(response.data.foundLoc[0].locationDetails);
        setDesc(response.data.foundLoc[0].description);
        setAvail(response.data.foundLoc[0].isAvailable);
        setContributor(response.data.foundLoc[0].contributorEmailId);
        setLocId(response.data.foundLoc[0]._id);
        setUrls(response.data.urlsArr);
        setLat(response.data.foundLoc[0].lat);
        setLgn(response.data.foundLoc[0].lng);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }

    fetchData();
  }, []);

  const slides = urls
  const pos = {
    lat , lng
  }

  const storedValue = localStorage.getItem('newVal');

  return (
    
    <>
    <div className='bg-gray-200'>
      <div className = ' z-10 sticky top-0 left-0  border   bg-gray-200 flex flex-row  justify-center ' >
        <>
          <div className='   top-0   flex items-center shadow-lg w-full   h-[135px] bg-slate-200  z-10 sticky   border  flex-row  justify-between ' >   
            <div className=' relative top-2  md:left-0      '>
                <img className='h-[300px] w-[300px]  ' src='https://res.cloudinary.com/dsjecjjig/image/upload/v1736416741/phd6yxxfulcqskyvemcd.png' />
            </div>
            <div className='    relative flex flex-row justify-between  md:gap-20  gap-2  '>
              <Tooltip content="Material Tailwind">
                <Link className='relative text-2xl hover:text-slate-400   ' activeClass="active" to="section1" spy={true} smooth={true} duration={500}>
                  Location View
                </Link>
              </Tooltip>
              <Link className='relative text-2xl hover:text-slate-400  ' activeClass="active" to="section2" spy={true} smooth={true} duration={500}>
                Details
              </Link>
              <Link className='relative text-2xl hover:text-slate-400  ' activeClass="active" to="section3" spy={true} smooth={true} duration={500}>
                Map View
              </Link>
              <div className='relative text-2xl hover:text-slate-400   ' onClick={()=>{navigate("/home")}}> <button>Home</button></div>
              <div>
                { data.accountType!="Student"  && currUser==contributor      ? (
                  <>
                    <Tooltip content="  Is Available">
                      <div>
                        <label class="inline-flex items-center cursor-pointer"> 
                          <button className='primary-btn' onClick={handleChange}>  {<span class="  font-medium   text-xl ">{avail ? (  <h1 className=' text-green-800'>{"Available"}</h1>) : ( <h1 className=' text-red-800'>{"Not Available"}</h1> )}</span>} </button>
                        </label>
                      </div>
                    </Tooltip>
                  </>
                 ):(<div>
                  {<span class="  font-medium   text-xl ">{avail ? (  <h1 className=' text-green-900'>{"Available"}</h1>) : ( <h1 className=' text-red-800'>{"Not Available"}</h1> )}</span>} 
                </div>)}
              </div>
            </div>
          </div>
        </>
      </div>  
      <div className='relative     flex flex-row min-h-screen justify-center items-center bg-gray-100 ' id='section1'>
          <ImageCarousel>
            {
              slides.map((s)=>(
                <img className='relative object-cover '   src={s}  key={uuidv4()} />
              ))
            }
          </ImageCarousel>
      </div>
      <div ref={myRef} id="section2" className='h-screen w-full  '>
        <div class=" bg-gray-200   border  rounded overflow-hidden shadow-lg  min-h-screen justify-center items-center  flex flex-row    ">
          <div className='relative   bg-slate-300  md:w-1/3 right-2  flex items-center md:h-full hover:shadow-lg  sm:w-1/2  sm:h-screen     '>   
            <ul className='relative       flex-col   gap-y-6      h-[500px]    flex  justify-center  items-start    ' >
                <div> <li className='md:text-2xl sm:text-xl sm:ml-2'>House Owner Name : {houseOwnerName}</li></div>
                <div><li  className='md:text-2xl sm:text-xl sm:ml-2'>Contact Number : {contactNumber}</li></div>
                <div><li className='md:text-2xl sm:text-xl sm:ml-2'>Distance From College : {distance}</li></div>
                <div><li className='md:text-2xl sm:text-xl sm:ml-2'>Expected Rent : {expectedRent}</li></div>
                <div><li className='md:text-2xl sm:text-xl sm:ml-2'>Location Address : {locationAdress}</li></div>
            </ul>
          </div>
          <div className='relative   h-[900px]   bg-slate-400  w-1   '> </div>
          <div className='relative  border      bg-slate-300 md:w-1/3   left-2  text-xl  flex items-center md:h-full hover:shadow-lg  sm:w-1/2    '>
            <div className='relative   leading-loose    md:h-[500px] md:text-2xl flex items-center justify-center px-3 py-3  sm:h-screen sm:text-xl        '>
              {desc}   
            </div>
          </div>
        </div>
      </div>
      <div className=' ' id='section3'>
        <Loc  props={pos}    />
      </div>
      { data.accountType!="Student"  && currUser==contributor      ? (
        <>
        <Tooltip content=" Do You Want To Remove The Location  ">
          <div class="relative flex justify-center items-center  bottom-7">
              <button onClick={handleRemove} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                  Remove
              </button>
          </div>
        </Tooltip>
        </>
        ):(<div></div>)
      }
     </div>
    </>
  )
}

export default LocationDetailsPage

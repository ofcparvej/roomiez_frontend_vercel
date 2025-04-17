import React from 'react'
import {  useNavigate } from 'react-router-dom';
import {
  CardHeader,
} from "@material-tailwind/react";


const Dummy = (props) => {

  const navigate = useNavigate()
  let logoUrl = props.data.collegeImgUrl;
  
  return (
    <div className='  '>
      <div  onClick={()=>{navigate(`/locations/${props.data.collegeCode}`)}} >
        <div class="max-w-sm      rounded overflow-hidden shadow-lg h-[600px] " >
          <CardHeader color="blue-gray" className="relative w-full object-cover">
            <img
              className='relative object-cover w-full'
              src={logoUrl}
              alt="card-image"
            />
          </CardHeader>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{props.data.collegeName}</div>
            <p class="text-gray-700 text-base">
              COLLEGE CODE : {props.data.collegeCode}
              <br></br>
              COLLEGE ADDRESS :  {props.data.address}
              <br></br>
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dummy

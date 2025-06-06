import React from 'react'
import ImageUpload from './ImageUpload'
// import Auth from './pages/Auth'
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Addlocationdetails = () => {

  const navigate = useNavigate();
    const { id } = useParams();
  // const data = useSelector((state) => state.auth);
  // console.log("DAta Upload file => " , data.accountType);


  return (
    <div >
      <div className='flex flex-col bg-gray-400 '>
        <div className='bg-gray-400'>
       
        <div className=' relative  bg-gray-400 '>
            <ImageUpload props={id}  />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Addlocationdetails

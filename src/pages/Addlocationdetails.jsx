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
    <div>
      <div className='flex flex-col '>
        <div className='relative flex justify-center '>  <button onClick={()=>{navigate(`/addlocations/${id}`)}}>prev</button> </div>
        <div className=' relative'>
            <ImageUpload />
        </div>
      </div>
    </div>
  )
}

export default Addlocationdetails

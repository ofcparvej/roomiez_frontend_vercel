import React from 'react'
import ImageUpload from './ImageUpload'
// import Auth from './pages/Auth'
import {useSelector} from 'react-redux';

const Addlocationdetails = () => {

  // const data = useSelector((state) => state.auth);
  // console.log("DAta Upload file => " , data.accountType);

  return (
    <div>
      <div>
        <div className=''>
            <ImageUpload />
        </div>
      </div>
    </div>
  )
}

export default Addlocationdetails

import React from 'react'
import { useEffect  , useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LocationsComponent = (props) => {

  // console.log("locationPROPS....... => " , props.ids);

  const res = props.ids;


  const navigate = useNavigate()

  // const [details ,setDetails] = useState('');

   const [houseOwnerName , sethouseOwnerName] = useState('');
   const [contactNumber , setcontactNumber] = useState('');
   const [collegeCode , setCollegeCode] = useState('');
   const [locaddress , setLocaddress] = useState('');
   const [locdetails , setLocdetails] = useState([]);
   const [expectedRent , setExpectedRent] = useState('');
   const [distance , setDistance] = useState('')
   const [isAvail , setIsAvail]=useState(false);
   



    useEffect(() => {
    //     axios.get(`http://localhost:7000/api/v1/loc/details/${props.ids}` , {})
    //     .then((res)=>{

        sethouseOwnerName(res.houseOwnerName)
        setCollegeCode(res.collegeCode)
        setcontactNumber(res.contactNumber)
        setLocaddress(res.locationAddress)
        setLocdetails(res.locationDetails)
        setExpectedRent(res.expectedRent)
        setDistance(res.distance)
        setIsAvail(res.isAvailable)

    //     })
      } , [])







  return (
    <div  onClick={()=>{navigate(`/locationdetails/${res._id}`)}}   >   



        {/* <div className='  relative  h-[50px] w-[50px] border-2 border-black m-2 '> */}

        <div class=" rounded overflow-hidden shadow-lg h-[300px] w-screen ">

          <div class="px-6 py-4   space-y-4">
            <div class="font-bold text-xl mb-2">Area : {locaddress}</div>
            <p class="relative text-gray-700 text-base  space-y-4 ">
              {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. */}

              <h4>House Owner Name : {houseOwnerName} </h4>
              <h4>Contact Number : {contactNumber} </h4>
              <h4>Address :  {locaddress} </h4>
              <h4>Distance : {distance}  </h4>
              



            </p>
          </div>



          {
            isAvail==true ? (  <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Available</span>
             </div>):(<div></div>)
          }

        {/* <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Button
        </button> */}

         


        </div>


        {/* </div> */}

 

    </div>

  )
}

export default LocationsComponent

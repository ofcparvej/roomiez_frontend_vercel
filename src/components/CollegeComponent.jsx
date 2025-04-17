import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios';


const CollegeComponent = (props) =>{

  console.log("innerProps = >" , props );

  console.log("iN Prop=?" , props.data);


  console.log("iN Prop=?" , props.data.address);
  // const {address}= props;
  // console.log(typeof(props));
  // console.log("address -> " , address);
  // console.log("res= >" ,props.values.collegeName);
  // console.log("props data =>" , props);


  // const [details , setDetails] = useState({});


  // useEffect(() => {
  //   axios.post("http://localhost:7000/api/v1/collegeD" , {collegeCode:props.collegeCode})
  //   .then((res)=>{
  //    setDetails(res.data.found_details);
  //   })
  // } , [])


  // onClick={()=>{window.location.replace(`/locations/${details.collegeCode}`)}}





  // console.log(details)

  //....................................................................

  // useEffect(() => {
  //   function fetchData() {
  //     // Define parameters
  //     const params = {
        
  //       collegeCode: '1002'
  //     };
    
  //     // Make GET request with parameters
  //     axios.get('http://localhost:7000/api/v1/college', { params })
  //       .then(response => {
  //         console.log("res=>",);
  //         setData(response.data.found_details );
  //         console.log(response.data.found_details 
  //         );
  //         setCollegeName(response.data.found_details.collegeName);
  //         setCollegeCode(response.data.found_datails.collegeCode);
  //         setCollegeaddress(response.data.found_datails.address);
  //         setCollegeMail(response.data.found_details.collegeMail);
  //         // setcollegeDetails(response.data.found_details);
  //       })
  //       .catch(error => {
  //         console.error('Error:', error);
  //       });

  //       //..........................


  //       axios.get('http://localhost:7000/api/v1/colleges', {  })
  //       .then(response => {
  //         console.log("resSS=>",response.data.found_colleges);

  //         setColleges(response.data.found_colleges);

  //       })
  //       .catch(error => {
  //         console.error('Error:', error);
  //       });


  //       //.....................
  //   }
    
  //   fetchData();
  // }, []);


  //....................................................................
  // onClick={()=>{window.location.replace(`/locations/${props.data.collegeCode}`)}}


  return (
    <div    className=' relative  content-center top-10 bg-slate-400' >
 
         <div className='relative  content-center' >


            {/* <div>CollegeName:{ props.data.collegeName}</div> */}

            {/* <div>CollegeName:{ 1}</div> */}


            {/* <br/>
            <div>CollegeCode:{props.data.collegeCode}</div> 
            <br/>
            <div>CollegeEmail:{props.data.collegeEmail}</div>  */}




         </div>

    </div>
  )
}

export default CollegeComponent

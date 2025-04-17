import React from 'react'
import {  useJsApiLoader ,  GoogleMap, Marker , Autocomplete  , StandaloneSearchBox, DirectionsService  , DirectionsRenderer} from '@react-google-maps/api' 
// const google = window.google;
import { useState } from 'react';
// import { useRef } from 'react';
// import withScriptjs from 'react-google-maps/lib/async/withScriptjs';



const MapComponent = (props) => {

  console.log("PROP => " , props)

  const currLat = props.props.lat;
  const currLng = props.props.lng;

  console.log("LAT=>" , typeof( currLat))

  
 





  // const lat = props.props.lat;
  // const lng = props.props.lng;

  // console.log("kk=>" , props.props.lat , "hh= >" , props.props.lng)

  //  const [lat , setLat]= useState()
  //  const [lon , setLog] = useState()
 
 
 
 
   const {isLoaded  } =useJsApiLoader({
     googleMapsApiKey:"AIzaSyAB4SCBAWVd9NqPda3FxDSy9dOzQcg34p4",
     libraries:['places' ]
   })


 
   const center ={
     lat:20.9459258, 
     lng:77.7509785
   }

   const centerLoc = {
    latc : parseFloat("20.952576"),
    lngc : parseFloat("77.750899"),

   }

   




 
   const [map , setMap] = useState(/**@type google.maps.Map */ (null));
 
 
   const [direResponse , setdireResponse] = useState(null);
 
   const [distance , setDistance] = useState('');
   const [time , setTime] = useState('');
 
 
   const [origin1 , setorigin1 ] = useState('');
   const [destination1 , setdestination1] = useState('');
 
   console.log("from=> " , origin1);
   console.log("to  =>" ,destination1 );
 
   const DEST ='Hazrat Bilal Nagar Amravati '
   const ORI = 'Government College Of Engineering Amravati'
 
 
 
 
   // const inputref = useRef(null);
 
   //...................................
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
   async function calculateRoute(){
 
     navigator.geolocation.getCurrentPosition((pos) => {
       console.log("po= >" , pos);
       setLat(pos.coords.latitude);
       setLog(pos.coords.longitude);
     })
 
 
    //  console.log("lat => " , lat , "logi =>" , lon);
    
 
 
 
 
 
 
 
 
 
 
   }
 
 
   function clearRoute(){
     setdireResponse(null);
     setorigin1('');
     setdestination1('');
   }
 
 
 
   //..................................................
 
 
 
 
 
 
 
 
 
 
 
   return (
 
 
 
     <>
 
     <div>
 
     {/* <Autocomplete >
     <input placeholder='enter'    />
     </Autocomplete>  */}
 
 
     {/* <input className='border text-center' placeholder='From' value = {origin1} onChange = {(e)=>(setorigin1(e.target.value))}    />
     <input className='border text-center' placeholder='To'   value={destination1} onChange = {(e) => (setdestination1(e.target.value))}  />
  */}
 
     {/* <div class="w-full max-w-sm min-w-[200px]">
     
     <Autocomplete><input class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..." /> </Autocomplete>
     </div> */}
    
 
 
     <button className=' border bg-slate-500 hover:bg-slate-400 ' onClick={()=>map.panTo(centerLoc)}>Calculate</button>
 
     <button className=' border bg-slate-300 hover:bg-slate-500 ' onClick={calculateRoute}>Calculate2</button>
     </div>
 
     
     
 
      
 
 
 
             <div  className='relative h-[850px] w-[780px] top-4  '   >
               <GoogleMap
               center={center}
                 zoom={50}    
                 options={{    
                   zoomControl:false,
                   streetViewControl:false,
                   mapTypeControl:false,      
                   fullscreenControl:false,
                   mapTypeId:"satellite",
                  //  zoom={11}
                 }}
 
                 mapContainerStyle={{width:'90%' , height:'90%'}}
                 onLoad={(map) => setMap(map)}
                 >
 
               <>  
               <Marker position={center} />  
               {direResponse && <DirectionsRenderer directions={direResponse} />}
               </>   
 
               </GoogleMap>
 
 
             </div>
 
 
 
               
 
    {/* //............................ */}
 
 

 
 
    
   </>
 
 
   )
}

export default MapComponent
















// import React from 'react'
// import { StandaloneSearchBox , LoadScript } from '@react-google-maps/api'
// import { useRef } from 'react';

// // const PlaceComp = () => {
// //   const inputref = useRef();

// //   // const [place] = inputref.current.getPlaces();
// //   // if(place){

// //   // }

// //   const handlePlaceChange = () => {
// //     const [place] = inputref.current.getPlaces();
// //   }

// // };




// const DummyC = () => {
//   const inputref = useRef();

//   //   const handlePlaceChange = () => {
//   //   const [place] = inputref.current.getPlaces();
//   //   console.log(place);
//   // }

//   return (
//     <LoadScript 
//     googleMapsApiKey= "AIzaSyAB4SCBAWVd9NqPda3FxDSy9dOzQcg34p4"
//     libraries={['places']}
//     >

//       <StandaloneSearchBox
//       onLoad = {ref => (inputref.current = ref)}
//       // onPlacesChanged = {handlePlaceChange}
      
//       >


//         <input className='form-control'
//         placeholder='Enter Location'
        
//         />

//       </StandaloneSearchBox>




//     </LoadScript>
//   )
// }

// export default DummyC



// import React from "react";
// import {
//   useJsApiLoader,
//   GoogleMap,
//   Marker,
//   DirectionsRenderer,
//   InfoWindow,
// } from "@react-google-maps/api";
// import { useState } from "react";

// const Loc = (props) => {
//   const KEY = import.meta.env.VITE_GOOGLE_API_KEY;

//   // NEW: State to simply track if the InfoWindow is open or closed.
//   const [isInfoWindowOpen, setInfoWindowOpen] = useState(false);
//   const currLat = parseFloat(props.props.lat);
//   const currLng = parseFloat(props.props.lng);
//   const currCollegeLat = parseFloat(props.props.collegeLat);
//   const currCollegeLng = parseFloat(props.props.collegelLng);
//   const locAdress = props.props.locationAdress;

//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: KEY,
//     libraries: ["places"],
//   });

//   const center = {
//     lat: currLat,
//     lng: currLng,
//   };

//   const collegeLoc = {
//     lat: currCollegeLat,
//     lng: currCollegeLng,
//   };

//   const [map, setMap] = useState(null);
//   const [direResponse, setdireResponse] = useState(null);

//   if (!isLoaded) {
//     return <div>Loading Map...</div>;
//   }

//   return (
//     <>
//       <div className="relative h-screen w-auto flex flex-row min-h-screen justify-center items-center">
//         <GoogleMap
//           center={center}
//           zoom={15}
//           options={{
//             zoomControl: false,
//             streetViewControl: false,
//             mapTypeControl: false,
//             fullscreenControl: false,
//             mapTypeId: "terrain",
//             disableDoubleClickZoom: true,
//           }}
//           mapContainerStyle={{ width: "70%", height: "70%" }}
//           onLoad={(map) => setMap(map)}
          
//         >
//           <div className="relative flex justify-center top-5 gap-5">
//             <button
//               className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
//               onClick={() => map.panTo(center)}
//             >
//               Your Location
//             </button>
//             <button
//               className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
//               onClick={() => map.panTo(collegeLoc)}
//             >
//               See College
//             </button>
//           </div>

//           <>
//             <Marker position={collegeLoc} />
//             <Marker
//               position={center}
//               onClick={() => setInfoWindowOpen(!isInfoWindowOpen)} 
//             />
//             {direResponse && <DirectionsRenderer directions={direResponse} />}
//           </>
//           {isInfoWindowOpen && (
//             <InfoWindow
//               position={center} 
//               onCloseClick={() => setInfoWindowOpen(false)} 
//             >
//               <div className="max-w-md p-6 px-4 py-2 bg-white rounded-lg shadow-lg text-center">
//                 <h6 className="font-bold">Location Address</h6>
//                 <p className="text-gray-600 mt-0">{locAdress}</p>
//               </div>
//             </InfoWindow>
//           )}
//         </GoogleMap>
//       </div>
//     </>
//   );
// };

// export default Loc;

import React from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
  InfoWindow,
  DirectionsService, // 1. Import DirectionsService
} from "@react-google-maps/api";
import { useState } from "react";

const Loc = (props) => {
  const KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  const [isInfoWindowOpen, setInfoWindowOpen] = useState(false);

  const currLat = parseFloat(props.props.lat);
  const currLng = parseFloat(props.props.lng);
  const currCollegeLat = parseFloat(props.props.collegeLat);
  const currCollegeLng = parseFloat(props.props.collegelLng);
  const locAdress = props.props.locationAdress;

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: KEY,
    libraries: ["places"],
  });

  const center = { lat: currLat, lng: currLng };
  const collegeLoc = { lat: currCollegeLat, lng: currCollegeLng };

  const [map, setMap] = useState(null);
  const [direResponse, setDireResponse] = useState(null);

  // 2. State to hold the origin and destination for the DirectionsService
  const [directionsRequest, setDirectionsRequest] = useState(null);

  // 3. Callback function for when the DirectionsService gets a result
  const directionsCallback = (response) => {
    if (response !== null) {
      if (response.status === "OK") {
        setDireResponse(response);
        setDirectionsRequest(null); // Clear the request to avoid re-fetching
      } else {
        console.error("Directions request failed due to " + response.status);
      }
    }
  };

  // 4. Function to trigger the route calculation
  const calculateRoute = () => {
    setDirectionsRequest({
      origin: center,
      destination: collegeLoc,
      travelMode: "DRIVING",
    });
  };

  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  return (
    <>
      <div className="relative h-screen w-auto flex flex-row min-h-screen justify-center items-center">
        <GoogleMap
          center={center}
          zoom={15}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            mapTypeId: "terrain",
            disableDoubleClickZoom: true,
          }}
          mapContainerStyle={{ width: "70%", height: "70%" }}
          onLoad={(map) => setMap(map)}
        >
          <div className="relative flex justify-center top-5 gap-5">
            <button
              className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
              onClick={() => map.panTo(center)}
            >
              Your Location
            </button>
            <button
              className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
              onClick={() => map.panTo(collegeLoc)}
            >
              See College
            </button>
            {/* 5. Add the "Show Route" button */}
            {/* <button
              className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
              onClick={calculateRoute}
            >
              Show Route
            </button> */}
          </div>

          <>
            <Marker position={collegeLoc} />
            <Marker
              position={center}
              onClick={() => setInfoWindowOpen(!isInfoWindowOpen)}
            />

            {/* 6. Add the DirectionsService component (it's invisible) */}
            {directionsRequest && (
              <DirectionsService
                options={directionsRequest}
                callback={directionsCallback}
              />
            )}

            {/* Your existing DirectionsRenderer will draw the route */}
            {direResponse && <DirectionsRenderer directions={direResponse} />}
          </>

          {isInfoWindowOpen && (
            <InfoWindow
              position={center}
              onCloseClick={() => setInfoWindowOpen(false)}
            >
              <div className="max-w-md p-6 px-4 py-2 bg-white rounded-lg shadow-lg text-center">
                <h6 className="font-bold">Location Address</h6>
                <p className="text-gray-600 mt-0">{locAdress}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </>
  );
};

export default Loc;
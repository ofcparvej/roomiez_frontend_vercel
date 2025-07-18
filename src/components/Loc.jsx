import React from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  StandaloneSearchBox,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
const google = window.google;
import { useState } from "react";
import { useRef } from "react";
import MapComponent from "../components/MapComponent";

const Loc = (props) => {
  const KEY = import.meta.env.VITE_GOOGLE_API_KEY;

  const [lat, setLat] = useState();
  const [lon, setLog] = useState();

  const currLat = parseFloat(props.props.lat);
  const currLng = parseFloat(props.props.lng);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: KEY,
    libraries: ["places"],
  });

  const center = {
    lat: currLat,
    lng: currLng,
  };

  const gcoea = {
    lat: 20.957194,
    lng: 77.756764,
  };

  const [map, setMap] = useState(/**@type google.maps.Map */ (null));

  const [direResponse, setdireResponse] = useState(null);

  const [origin1, setorigin1] = useState("");
  const [destination1, setdestination1] = useState("");

  console.log("from=> ", origin1);
  console.log("to  =>", destination1);

  return (
    <>
      {/* Google Map Compo ...  */}
      <div className="relative     h-screen w-auto flex flex-row min-h-screen justify-center items-center   ">
        <GoogleMap
          center={center}
          zoom={60}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            mapTypeId: "satellite",
          }}
          mapContainerStyle={{ width: "70%", height: "70%" }}
          onLoad={(map) => setMap(map)}
        >
          <div className="relative  flex justify-center top-5 gap-5 ">
            <button
              className=" px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md "
              onClick={() => map.panTo(center)}
            >
              Your Location
            </button>
            <button
              className=" px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md "
              onClick={() => map.panTo(gcoea)}
            >
              See College{" "}
            </button>
          </div>

          <>
            <Marker position={gcoea} />
            <Marker position={center} />
            {direResponse && <DirectionsRenderer directions={direResponse} />}
          </>
        </GoogleMap>
      </div>
    </>
  );
};

export default Loc;

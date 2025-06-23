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
import { useState } from "react";

const MapComponent = (props) => {
  console.log("PROP => ", props);

  const currLat = props.props.lat;
  const currLng = props.props.lng;

  console.log("LAT=>", typeof currLat);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAB4SCBAWVd9NqPda3FxDSy9dOzQcg34p4",
    libraries: ["places"],
  });

  const center = {
    lat: 20.9459258,
    lng: 77.7509785,
  };

  const centerLoc = {
    latc: parseFloat("20.952576"),
    lngc: parseFloat("77.750899"),
  };

  const [map, setMap] = useState(/**@type google.maps.Map */ (null));

  const [direResponse, setdireResponse] = useState(null);

  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("");

  const [origin1, setorigin1] = useState("");
  const [destination1, setdestination1] = useState("");

  console.log("from=> ", origin1);
  console.log("to  =>", destination1);

  const DEST = "Hazrat Bilal Nagar Amravati ";
  const ORI = "Government College Of Engineering Amravati";

  async function calculateRoute() {
    navigator.geolocation.getCurrentPosition((pos) => {
      //  console.log("po= >" , pos);
      setLat(pos.coords.latitude);
      setLog(pos.coords.longitude);
    });
  }

  function clearRoute() {
    setdireResponse(null);
    setorigin1("");
    setdestination1("");
  }

  return (
    <>
      <div>
        <button
          className=" border bg-slate-500 hover:bg-slate-400 "
          onClick={() => map.panTo(centerLoc)}
        >
          Calculate
        </button>

        <button
          className=" border bg-slate-300 hover:bg-slate-500 "
          onClick={calculateRoute}
        >
          Calculate2
        </button>
      </div>

      <div className="relative h-[850px] w-[780px] top-4  ">
        <GoogleMap
          center={center}
          zoom={50}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            mapTypeId: "satellite",
            //  zoom={11}
          }}
          mapContainerStyle={{ width: "90%", height: "90%" }}
          onLoad={(map) => setMap(map)}
        >
          <>
            <Marker position={center} />
            {direResponse && <DirectionsRenderer directions={direResponse} />}
          </>
        </GoogleMap>
      </div>
    </>
  );
};

export default MapComponent;

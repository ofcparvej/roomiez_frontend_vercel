
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import ImageCarousel from "../components/ImageCarousel";
import Loc from "../components/Loc";
import { Tooltip } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faImage,
 faCircleInfo,
 faMapLocation,
 faHome,
 faArrowAltCircleLeft,
 faFaceSadCry,
 faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";

const LocationDetailsPage = () => {
 const data = useSelector((state) => state.auth);
 const navigate = useNavigate();
 const currUser = data.email;
 const [lat, setLat] = useState(null);
 const [lng, setLng] = useState(null);
 const [houseOwnerName, setHouseOwnerName] = useState("");
 const [contactNumber, setContactNumber] = useState("");
 const [distance, setDistance] = useState("");
 const [expectedRent, setExpectedRent] = useState("");
 const [locationAdress, setLocationAdress] = useState("");
 const [desc, setDesc] = useState("");
 const [locId, setLocId] = useState("");
 const [avail, setAvail] = useState(false);
 const [contributor, setContributor] = useState("");
 const [isChecked, setIsChecked] = useState(false);
 const [collegeCode, setCollegeCode] = useState("");
 const [contributorName, setContributorName] = useState("");
 const [contributorContactNumber, setContributorContactNumber] = useState("");
 const [collegeLat, setCollegeLatitude] = useState("");
 const [collegelLng, setCollegeLongitude] = useState("");
 const [urls, setUrls] = useState([]);
 const myRef = useRef(null);
 const { currLocationid } = useParams();

 if (data.accountType === "") {
  navigate("/");
 }

 useEffect(() => {
     const token = sessionStorage.getItem("token11");
     if (!token) navigate("/");
   }, []);


 const handleRemove = () => {
  async function removeLoc() {
   try {
    await axios.post("https://roomiez-backend-deployment.onrender.com/api/v1/loc/remove", { locId });
   } catch (error) {
    console.log(error);
   }
  }
  removeLoc().then(() => navigate("/home"));
 };

 const handleChange = () => {
  const newAvailStatus = !avail;
  setIsChecked(newAvailStatus); 
  async function updateStatus() {
   try {
    await axios.post("https://roomiez-backend-deployment.onrender.com/api/v1/loc/updatestatus", { locId, isAvailable: newAvailStatus });
    setAvail(newAvailStatus);
   } catch (error) {
    console.log(error);
   }
  }
  updateStatus();
 };

 useEffect(() => {
  async function fetchData() {
   try {
    const response = await axios.get("https://roomiez-backend-deployment.onrender.com/api/v1/loc/locimgs", { params: { currLocationid } });
    const { foundLoc, urlsArr } = response.data;
    if (foundLoc && foundLoc.length > 0) {
     setHouseOwnerName(foundLoc[0].houseOwnerName);
     setContactNumber(foundLoc[0].contactNumber);
     setDistance(foundLoc[0].distance);
     setExpectedRent(foundLoc[0].expectedRent);
     setLocationAdress(foundLoc[0].locationAddress);
     setDesc(foundLoc[0].description);
     setAvail(foundLoc[0].isAvailable);
     setContributor(foundLoc[0].contributorEmailId);
     setLocId(foundLoc[0]._id);
     setUrls(urlsArr);
     setLat(foundLoc[0].lat);
     setLng(foundLoc[0].lng);
     setCollegeCode(foundLoc[0].collegeCode);
     setContributorName(foundLoc[0].contributorName);
     setContributorContactNumber(foundLoc[0].contributorContactNumber);
     setCollegeLatitude(foundLoc[0].collegeLat);
     setCollegeLongitude(foundLoc[0].collegelLng);
    }
   } catch (error) {
    console.error("Error:", error);
   }
  }

  fetchData();
 }, [currLocationid]);

 const slides = urls;
 const pos = { lat, lng, collegeLat, collegelLng, locationAdress };

 return (
  <div className="bg-gray-200 overflow-x-hidden min-h-screen">
   {/* HEADER */}
   <div className="sticky top-0 z-10 w-full bg-slate-200 shadow-lg">
    <div className="flex items-center justify-center md:justify-between w-full h-[90px] px-4 max-w-7xl mx-auto">
     <div className="hidden md:block">
      <img
       className="h-36 w-36"
       src="https://res.cloudinary.com/dsjecjjig/image/upload/v1736416741/phd6yxxfulcqskyvemcd.png"
       alt="Roomiez Logo"
      />
     </div>

     {/* Icons Container */}
     <div className="flex items-center w-full justify-around md:w-auto md:justify-start md:gap-8">
      <Tooltip content="Location View">
       <Link to="section1" spy={true} smooth={true} duration={500} className="text-xl text-gray-400 hover:text-slate-500 cursor-pointer">
        <h1 className="hidden md:block">Location View</h1>
        <div className="md:hidden"><FontAwesomeIcon icon={faImage} size="lg" /></div>
       </Link>
      </Tooltip>
      <Tooltip content="Details">
       <Link to="section2" spy={true} smooth={true} duration={500} className="text-xl text-gray-400 hover:text-slate-500 cursor-pointer">
        <h1 className="hidden md:block">Details</h1>
        <div className="md:hidden"><FontAwesomeIcon icon={faCircleInfo} size="lg" /></div>
       </Link>
      </Tooltip>
      <Tooltip content="Map View">
       <Link to="section3" spy={true} smooth={true} duration={500} className="text-xl text-gray-400 hover:text-slate-500 cursor-pointer">
        <h1 className="hidden md:block">Map View</h1>
        <div className="md:hidden"><FontAwesomeIcon icon={faMapLocation} size="lg" /></div>
       </Link>
      </Tooltip>
      <Tooltip content="Previous Page">
       <button className="text-xl text-gray-400 hover:text-slate-500" onClick={() => { collegeCode && navigate(`/locations/${collegeCode}`); }}>
        <h1 className="hidden md:block">Locations</h1>
        <div className="md:hidden"><FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" /></div>
       </button>
      </Tooltip>
      <Tooltip content="Home">
       <button className="text-xl text-gray-400 hover:text-slate-500" onClick={() => { navigate("/home"); }}>
        <h1 className="hidden md:block">Home</h1>
        <div className="md:hidden"><FontAwesomeIcon icon={faHome} size="lg" /></div>
       </button>
      </Tooltip>

      {/* Availability Status */}
      <div className="text-xl">
       {data.accountType !== "Student" && currUser === contributor ? (
        <button onClick={handleChange}>
         {avail ? (
          <Tooltip content="Available">
           <div className="text-green-800"><FontAwesomeIcon icon={faFaceSmile} size="lg" /></div>
          </Tooltip>
         ) : (
          <Tooltip content="Not Available">
           <div className="text-gray-400 hover:text-slate-500"><FontAwesomeIcon icon={faFaceSadCry} size="lg" /></div>
          </Tooltip>
         )}
        </button>
       ) : (
        <span>
         {avail ? (
          <Tooltip content="Available">
           <div className="text-green-400"><FontAwesomeIcon icon={faFaceSmile} size="lg" /></div>
          </Tooltip>
         ) : (
          <Tooltip content="Not Available">
           <div className="text-slate-600"><FontAwesomeIcon icon={faFaceSadCry} size="lg" /></div>
          </Tooltip>
         )}
        </span>
       )}
      </div>
     </div>
    </div>
   </div>

   <div className="relative flex flex-row min-h-screen justify-center items-center bg-gray-100" id="section1">
    <ImageCarousel>
     {slides.map((s) => (<img className="w-full h-full object-cover" src={s} key={uuidv4()} alt="Carousel slide" />))}
    </ImageCarousel>
   </div>
   <div ref={myRef} id="section2" className="relative h-screen w-full">
    <div className="hidden md:block">
     <div className="bg-gray-200 p-4 min-h-screen flex flex-col md:flex-row justify-center items-center gap-4">
      <div className="bg-slate-300 w-full md:w-1/2 lg:w-1/3 p-6 shadow-lg shadow-slate-600 rounded max-h-[85vh] overflow-y-auto">
       <ul className="flex flex-col gap-y-6 justify-center">
        <li className="md:text-2xl font-mono sm:text-xl break-words">House Owner Name: <span className="hover:underline decoration-solid">{houseOwnerName}</span></li>
        <li className="md:text-2xl font-mono sm:text-xl break-words">Distance From College: <span className="hover:underline decoration-solid">{distance}</span></li>
        <li className="md:text-2xl font-mono sm:text-xl break-words">Expected Rent: <span className="hover:underline decoration-solid">{expectedRent}</span></li>
        <li className="md:text-2xl font-mono sm:text-xl break-words">Location Address: <span className="hover:underline decoration-solid">{locationAdress}</span></li>
        <li className="md:text-2xl font-mono sm:text-xl break-words">Contributor Name: <span className="hover:underline decoration-solid">{contributorName}</span></li>
        <li className="md:text-2xl font-mono sm:text-xl break-words">Contributor Contact Number: <span className="hover:underline decoration-solid">{contributorContactNumber}</span></li>
       </ul>
      </div>
      <div className="bg-slate-300 w-full md:w-1/2 lg:w-1/3 p-6 shadow-lg shadow-slate-600 rounded max-h-[85vh] overflow-y-auto">
       <div className="font-mono text-xl md:text-2xl flex items-center justify-center break-words leading-loose">{desc}</div>
      </div>
     </div>
    </div>
    <div className="block md:hidden min-h-screen">
     <div className="flex flex-col justify-center h-screen gap-2">
      <div className="h-1/2 flex justify-center items-center shadow-lg shadow-slate-600 p-2">
       <div className="flex flex-col gap-2">
        <div className="sm:text-xl">House Owner Name: <span className="hover:underline decoration-solid">{houseOwnerName}</span></div>
        <div className="sm:text-xl">Distance From College: <span className="hover:underline decoration-solid">{distance}</span></div>
        <div className="sm:text-xl">Expected Rent: <span className="hover:underline decoration-solid">{expectedRent}</span></div>
        <div className="sm:text-xl">Location Address: <span className="hover:underline decoration-solid">{locationAdress}</span></div>
        <div className="sm:text-xl">Contributor Name: <span className="hover:underline decoration-solid">{contributorName}</span></div>
        <div className="sm:text-xl">Contributor Contact Number: <span className="hover:underline decoration-solid">{contributorContactNumber}</span></div>
       </div>
      </div>
      <div className="h-1/2 flex justify-center items-center shadow-lg shadow-slate-600 p-2">
       <div className="ml-1 mr-1">{desc}</div>
      </div>
     </div>
    </div>
   </div>
   <div className="relative h-screen w-full border bg-gray-200 top-3" id="section3">
    <div className="flex flex-col">
     <div className="relative"><Loc props={pos} /></div>
     <div className="relative">
      {data.accountType !== "Student" && currUser === contributor ? (
       <Tooltip content="Do You Want To Remove The Location">
        <div className="relative flex justify-center items-center">
         <button onClick={handleRemove} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Remove</button>
        </div>
       </Tooltip>
      ) : (
       <div></div>
      )}
     </div>
    </div>
   </div>
  </div>
 );
};

export default LocationDetailsPage;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import LocationsComponent from "../components/LocationsComponent";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { logOutUser } from "../store/slices/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faHome,
 faLocationDot,
 faUniversity,
 faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Locations = () => {
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const data = useSelector((state) => state.auth);
 const Type = data.accountType;
 const [searchText, setSearchText] = useState("");
 const { collegeCode } = useParams();

 if (data.accountType === "") {
  navigate("/");
 }

 useEffect(() => {
  const token = sessionStorage.getItem('authSessionToken');
  if (!token) navigate("/");
 }, []);

 const [locations, setLocations] = useState([]);

 useEffect(() => {
  const params = { collegeCode: collegeCode };
  axios
   .get(
    "https://roomiez-backend-deployment.onrender.com/api/v1/loc/alldetails",
    { params }
   )
   .then((res) => {
    setLocations(res.data.Locations);
   });
 }, [collegeCode]);

 const filteredLocations = locations.filter((res) =>
  res.locationAddress
   .trim()
   .replace(/\s+/g, "")
   .toLowerCase()
   .includes(searchText.toLowerCase().replace(/\s+/g, ""))
 );

 return (
  <div className="bg-gray-100 min-h-screen overflow-x-hidden">
   {/* HEADER */}
   <div className="sticky top-0 z-10 w-full bg-slate-200 shadow-lg">
    <div className="flex items-center justify-center md:justify-between w-full h-[90px] px-4 max-w-7xl mx-auto">
     {/* Logo */}
     <div className="hidden md:block">
      <img
       className="h-36 w-36"
       src="https://res.cloudinary.com/dsjecjjig/image/upload/v1736416741/phd6yxxfulcqskyvemcd.png"
       alt="Logo"
      />
     </div>

     {/* Search and Icons */}
     <div className="flex items-center w-full justify-around md:w-auto md:justify-start md:gap-6">
      <input
       className="h-10 text-center rounded-md w-32 md:w-40 hover:shadow-md"
       placeholder="Search by Area"
       onChange={(e) => setSearchText(e.target.value)}
      />

      {Type === "Admin" && (
       <button
        className="text-gray-500 hover:text-slate-600"
        onClick={() => navigate(`/addcollege`)}
       >
        <h1 className="hidden md:block">Add College</h1>
        <h1 className="md:hidden">
         <FontAwesomeIcon icon={faUniversity} size="lg" />
        </h1>
       </button>
      )}

      {Type !== "Student" && (
       <button
        className="text-gray-500 hover:text-slate-600"
        onClick={() => navigate(`/addlocations/${collegeCode}`)}
       >
        <h1 className="hidden md:block">Add Location</h1>
        <h1 className="md:hidden">
         <FontAwesomeIcon icon={faLocationDot} size="lg" />
        </h1>
       </button>
      )}

      <button
       className="text-gray-500 hover:text-slate-600"
       onClick={() => {
        if (data.accountType === "Admin") {
         navigate("/admin");
        } else {
         navigate("/home");
        }
       }}
      >
       <h1 className="hidden md:block">Home</h1>
       <h1 className="md:hidden">
        <FontAwesomeIcon icon={faHome} size="lg" />
       </h1>
      </button>

      <button
       className="text-gray-500 hover:text-slate-600"
       onClick={() => {
        localStorage.removeItem("token11");
        dispatch(logOutUser());
        navigate("/");
       }}
      >
       <h1 className="hidden md:block">LogOut</h1>
       <h1 className="md:hidden">
        <FontAwesomeIcon icon={faRightFromBracket} size="lg" />
       </h1>
      </button>
     </div>
    </div>
   </div>

   {/* CONTENT GRID */}
   <div className="py-8 px-4">
    <div className="max-w-7xl mx-auto flex justify-center">
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {(searchText ? filteredLocations : locations).map((location) => (
       <div key={uuidv4()}>
        <LocationsComponent ids={location} />
       </div>
      ))}
     </div>
    </div>
   </div>
  </div>
 );
};

export default Locations;
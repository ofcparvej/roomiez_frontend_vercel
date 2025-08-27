import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ImageCarousel from "../components/ImageCarousel";
import { useRef } from "react";
import Loc from "../components/Loc";
import { Tooltip } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faCircleInfo,
  faMap,
  faHome,
  faArrowAltCircleLeft,
  faFaceSadCry,
  faFaceSmile,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";

const LocationDetailsPage = () => {
  const data = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const currUser = data.email;
  const [lat, setLat] = useState();
  const [lng, setLgn] = useState();
  const [houseOwnerName, setHouseOwnerName] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [distance, setDistance] = useState();
  const [expectedRent, setExpectedRent] = useState();
  const [locationAdress, setLocationAdress] = useState();
  const [desc, setDesc] = useState();
  const [locId, setLocId] = useState();
  const [avail, setAvail] = useState();
  const [contributor, setContributor] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [collegeCode, setcollegeCode] = useState("");
  const [contributorName, setcontributorName] = useState("");
  const [contributorContactNumber, setcontributorContactNumber] = useState("");
  const [collegeLat, setCollegeLatitude] = useState("");
  const [collegelLng, setCollegeLongitude] = useState("");

  const data1 = useSelector((state) => state.auth);

  // console.log("DAta => ", data1.accountType);
  if (data1.accountType == "") {
    navigate("/");
  }

  useEffect(() => {
    const token = sessionStorage.getItem("authSessionToken");
    if (!token) navigate("/");
  }, []);

  const handleRemove = () => {
    async function removeLoc() {
      const lodD = {
        locId,
      };
      try {
        const res = await axios.post(
          "https://roomiez-backend-deployment.onrender.com/api/v1/loc/remove",
          lodD
        );
      } catch (error) {
        console.log(error);
      }
    }
    removeLoc() && navigate("/home");
  };

  const handleChange = () => {
    setIsChecked(!isChecked);
    async function updateStatus() {
      const lodD = {
        locId,
        isChecked,
      };
      try {
        const res = await axios.post(
          "https://roomiez-backend-deployment.onrender.com/api/v1/loc/updatestatus",
          lodD
        );
      } catch (error) {
        console.log(error);
      }
    }
    updateStatus() && localStorage.setItem("newVal", !isChecked);
  };

  const myRef = useRef(null);
  const { currLocationid } = useParams();
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const storedValue = localStorage.getItem("newVal");
    async function fetchData() {
      const params = {
        currLocationid: currLocationid,
      };
      // console.log("params->" , params)
      await axios
        .get(
          "https://roomiez-backend-deployment.onrender.com/api/v1/loc/locimgs",
          { params }
        )
        .then((response) => {
          console.log("getWala--->", response.data);
          setHouseOwnerName(response.data.foundLoc[0].houseOwnerName);
          setContactNumber(response.data.foundLoc[0].contactNumber);
          setDistance(response.data.foundLoc[0].distance);
          setExpectedRent(response.data.foundLoc[0].expectedRent);
          setLocationAdress(response.data.foundLoc[0].locationAddress);
          setDesc(response.data.foundLoc[0].description);
          setAvail(response.data.foundLoc[0].isAvailable);
          setContributor(response.data.foundLoc[0].contributorEmailId);
          setLocId(response.data.foundLoc[0]._id);
          setUrls(response.data.urlsArr);
          setLat(response.data.foundLoc[0].lat);
          setLgn(response.data.foundLoc[0].lng);
          setcollegeCode(response.data.foundLoc[0].collegeCode);
          setcontributorName(response.data.foundLoc[0].contributorName);
          setcontributorContactNumber(
            response.data.foundLoc[0].contributorContactNumber
          );
          setCollegeLatitude(response.data.foundLoc[0].collegeLat);
          setCollegeLongitude(response.data.foundLoc[0].collegelLng);
        })
        .catch((error) => {
          // console.log("lat=>",lng)

          console.error("Error:", error);
        });
    }

    fetchData();
  }, []);

  const slides = urls;
  const pos = {
    lat,
    lng,
    collegeLat,
    collegelLng,
    locationAdress,
  };

  console.log("pos->", pos);

  const storedValue = localStorage.getItem("newVal");

  return (
    <>
      <div className="bg-gray-200">
        <div className=" z-10 sticky top-0 left-0  border   bg-gray-200 flex flex-row  justify-center ">
          <>
            <div className="sticky top-0 z-10 flex items-center shadow-lg w-full h-[90px] bg-slate-200 border px-4">
              <div className="flex flex-row items-center justify-around md:justify-between w-full">
                <img
                  className="h-40 w-40 md:h-[210px] md:w-[210px]"
                  src="https://res.cloudinary.com/dsjecjjig/image/upload/v1736416741/phd6yxxfulcqskyvemcd.png"
                  alt="Roomiez Logo"
                />

                <div className="flex flex-row items-center md:gap-20">
                  <Tooltip content="Material Tailwind">
                    <Link
                      className="relative text-xl text-gray-400 h-8 text-center rounded-md hover:text-slate-500"
                      activeClass="active"
                      to="section1"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      <h1 className="hidden md:block">Location View</h1>
                      <h1 className="md:hidden">
                        <FontAwesomeIcon icon={faImage} />
                      </h1>
                      <div className="text-sm text-slate-600 bg-gray-300 rounded opacity-0 hover:opacity-100 transition duration-200">
                        Preview
                      </div>
                    </Link>
                  </Tooltip>

                  <Link
                    className="relative text-xl text-gray-400 h-8 text-center rounded-md hover:text-slate-500"
                    activeClass="active"
                    to="section2"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <h1 className="hidden md:block">Details</h1>
                    <h1 className="md:hidden">
                      <FontAwesomeIcon icon={faCircleInfo} />
                    </h1>
                    <div className="text-sm text-slate-600 bg-gray-300 rounded opacity-0 hover:opacity-100 transition duration-200">
                      Details
                    </div>
                  </Link>
                  <Link
                    className="relative text-xl text-gray-400 h-8 text-center rounded-md hover:text-slate-500"
                    activeClass="active"
                    to="section3"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <h1 className="hidden md:block">Map View</h1>
                    <h1 className="md:hidden">
                      <FontAwesomeIcon icon={faMapLocation} />
                    </h1>
                    <div className="text-sm text-slate-600 bg-gray-300 rounded opacity-0 hover:opacity-100 transition duration-200">
                      Map View
                    </div>
                  </Link>

                  <div className="relative text-xl text-gray-400 h-8 text-center rounded-md hover:text-slate-500">
                    <button
                      onClick={() => {
                        collegeCode && navigate(`/locations/${collegeCode}`);
                      }}
                    >
                      <h1 className="hidden md:block">Locations</h1>
                      <h1 className="md:hidden">
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                        <div className="text-sm text-slate-600 bg-gray-300 rounded opacity-0 hover:opacity-100 transition duration-200">
                          prev page
                        </div>
                      </h1>
                    </button>
                  </div>
                  <div
                    className="relative text-xl text-gray-400 h-8 text-center rounded-md hover:text-slate-500"
                    onClick={() => {
                      navigate("/home");
                    }}
                  >
                    <button>
                      <h1 className="hidden md:block">Home</h1>
                      <h1 className="md:hidden">
                        <FontAwesomeIcon icon={faHome} />
                      </h1>
                      <div className="text-sm text-slate-600 bg-gray-300 rounded opacity-0 hover:opacity-100 transition duration-200">
                        Home
                      </div>
                    </button>
                  </div>
                  <div>
                    {data.accountType != "Student" &&
                    currUser == contributor ? (
                      <>
                        <div>
                          <label class="inline-flex items-center cursor-pointer">
                            <button
                              className="primary-btn"
                              onClick={handleChange}
                            >
                              {
                                <span class="font-medium text-xl">
                                  {avail ? (
                                    <div className="text-green-800">
                                      <h1 className="hidden md:block">
                                        Available
                                      </h1>
                                      <h1 className="md:hidden">
                                        <FontAwesomeIcon icon={faFaceSmile} />
                                      </h1>
                                      <div className="text-sm text-slate-600 bg-gray-300 rounded opacity-0 hover:opacity-100 transition duration-200">
                                        Available
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="relative text-md text-gray-400 h-8 text-center rounded-md hover:text-slate-500">
                                      <h1 className="hidden md:block">
                                        Not Available
                                      </h1>
                                      <h1 className="md:hidden">
                                        <FontAwesomeIcon icon={faFaceSadCry} />
                                      </h1>
                                      <div className="text-sm text-slate-600 bg-gray-300 rounded opacity-0 hover:opacity-100 transition duration-200">
                                        Not Available
                                      </div>
                                    </div>
                                  )}
                                </span>
                              }
                            </button>
                          </label>
                        </div>
                      </>
                    ) : (
                      <div>
                        {
                          <span class="font-medium text-xl">
                            {avail ? (
                              <div className="text-green-400 hover:text-green-500">
                                <h1 className="hidden md:block"> Available</h1>
                                <h1 className="md:hidden">
                                  <FontAwesomeIcon icon={faFaceSmile} />
                                </h1>
                              </div>
                            ) : (
                              <div className="relative text-md h-8 text-center text-slate-600 rounded-md hover:text-red-400">
                                <h1 className="hidden md:block">
                                  Not Available
                                </h1>
                                <h1 className="md:hidden">
                                  <FontAwesomeIcon icon={faFaceSadCry} />
                                </h1>
                                <div className="text-sm text-slate-600 bg-gray-300 rounded opacity-0 hover:opacity-100 transition duration-200">
                                  Not Available
                                </div>
                              </div>
                            )}
                          </span>
                        }
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>

        <div
          className="relative     flex flex-row min-h-screen justify-center items-center bg-gray-100  border "
          id="section1"
        >
          <ImageCarousel>
            {slides.map((s) => (
              // 4. Add these classes to make the image fill its container
              <img
                className="w-full h-full object-cover"
                src={s}
                key={uuidv4()}
                alt="Carousel slide"
              />
            ))}
          </ImageCarousel>
        </div>

        <div
          ref={myRef}
          id="section2"
          className="relative h-screen w-full  border   "
        >
          <div className="hidden md:block">
            {/* The only change is 'items-start' is now 'items-center' */}
            <div className="bg-gray-200 p-4 min-h-screen flex flex-col md:flex-row justify-center items-center gap-4">
              {/* LEFT BOX */}
              <div className="bg-slate-300 w-full md:w-1/2 lg:w-1/3 p-6 shadow-lg shadow-slate-600 rounded max-h-[85vh] overflow-y-auto">
                <ul className="flex flex-col gap-y-6 justify-center">
                  <div className="md:text-2xl font-mono  sm:text-xl break-words">
                    House Owner Name:{" "}
                    <span className="hover:underline decoration-solid">
                      {houseOwnerName}
                    </span>
                  </div>
                  <div className="md:text-2xl font-mono  sm:text-xl break-words">
                    Distance From College:{" "}
                    <span className="hover:underline decoration-solid">
                      {contactNumber}
                    </span>
                  </div>
                  <div className="md:text-2xl font-mono  sm:text-xl break-words">
                    Expected Rent:{" "}
                    <span className="hover:underline decoration-solid">
                      {expectedRent}
                    </span>
                  </div>
                  <div className="md:text-2xl font-mono  sm:text-xl break-words">
                    Location Address:{" "}
                    <span className="hover:underline decoration-solid">
                      {locationAdress}
                    </span>
                  </div>
                  <div className="md:text-2xl font-mono  sm:text-xl break-words">
                    Contributor Name:{" "}
                    <span className="hover:underline decoration-solid">
                      {contributorName}
                    </span>
                  </div>
                  <div className="md:text-2xl font-mono  sm:text-xl break-words">
                    Contributor Contact Number:{" "}
                    <span className="hover:underline decoration-solid">
                      {contributorContactNumber}
                    </span>
                  </div>
                </ul>
              </div>

              {/* RIGHT BOX */}
              <div className="bg-slate-300 w-full md:w-1/2 lg:w-1/3 p-6 shadow-lg shadow-slate-600 rounded max-h-[85vh] overflow-y-auto">
                <div className="font-mono text-xl md:text-2xl flex items-center justify-center break-words leading-loose">
                  {desc}
                </div>
              </div>
            </div>
          </div>

          {/* //..................... */}

          <div className=" block md:hidden min-h-screen  border ">
            {/* <div class="    bg-gray-200   border  rounded overflow-hidden shadow-lg  min-h-screen justify-center items-center  flex flex-col     "> */}
            <div className="">
              <div className=" relative  gap-2 flex flex-col justify-center h-screen">
                <div className="relative   h-1/2 flex justify-center items-center shadow-lg shadow-slate-600      ">
                  <div className="relative  flex flex-col gap-2      ">
                    <div className="relative md:text-2xl sm:text-xl sm:ml-2">
                      {" "}
                      House Owner Name :
                      <span className="hover:underline decoration-solid">
                        {houseOwnerName}{" "}
                      </span>{" "}
                    </div>
                    <div className=" relative md:text-2xl sm:text-xl sm:ml-2">
                      Distance From College :{" "}
                      <span className="hover:underline decoration-solid">
                        {contactNumber}{" "}
                      </span>
                    </div>
                    <div className="relative md:text-2xl sm:text-xl sm:ml-2">
                      Expected Rent :{" "}
                      <span className="hover:underline decoration-solid">
                        {expectedRent}{" "}
                      </span>
                    </div>
                    <div className="relative md:text-2xl sm:text-xl sm:ml-2">
                      Location Address :{" "}
                      <span className="hover:underline decoration-solid">
                        {locationAdress}{" "}
                      </span>
                    </div>
                    <div className="md:text-2xl sm:text-xl sm:ml-2  ">
                      Contributor Name :{" "}
                      <span className="hover:underline decoration-solid">
                        {contributorName}{" "}
                      </span>{" "}
                    </div>
                    <div className="md:text-2xl sm:text-xl sm:ml-2  ">
                      Contributor Contact Number :{" "}
                      <span className="hover:underline decoration-solid">
                        {contributorContactNumber}{" "}
                      </span>{" "}
                    </div>
                  </div>
                </div>

                <div className="relative  h-1/2 flex justify-center items-center shadow-lg shadow-slate-600      ">
                  <div className="relative  ml-1 mr-1         ">{desc}</div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative h-screen w-full border   bg-gray-200  top-3   "
          id="section3"
        >
          {/* <div className='relative    min-h-screen justify-center bottom-[-90px]  '> */}
          <div className="flex flex-col ">
            <div className="relative">
              {" "}
              <Loc props={pos} />{" "}
            </div>
            <div className="relative">
              {data.accountType != "Student" && currUser == contributor ? (
                <>
                  <Tooltip content=" Do You Want To Remove The Location  ">
                    <div class="relative flex justify-center items-center  ">
                      <button
                        onClick={handleRemove}
                        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                      >
                        Remove
                      </button>
                    </div>
                  </Tooltip>
                </>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationDetailsPage;

import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import LocationsComponent from "../components/LocationsComponent";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { logOutUser } from "../store/slices/authSlice";
// import { useParams } from 'react-router-dom';
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

  useEffect(() => {
    const token = localStorage.getItem("token11");
    if (token.length <= 4) navigate("/");
  }, []);

  const data = useSelector((state) => state.auth);
  const Type = data.accountType;
  const [searchText, setSearchText] = useState("");
  const { collegeCode } = useParams();

  console.log("DAta => ", data.accountType);
  const accType = data.accountType;

  const data1 = useSelector((state) => state.auth);

  console.log("DAta => ", data1.accountType);
  if (data1.accountType == "") {
    navigate("/");
  }

  const params = {
    collegeCode: collegeCode,
  };

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://roomiez-backend-deployment.onrender.com/api/v1/loc/alldetails",
        { params }
      )
      .then((res) => {
        setLocations(res.data.Locations);
      });
  }, []);

  const filteredLocations = locations.filter((res) =>
    res.locationAddress
      .trim()
      .replace(/\s+/g, "")
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  const { id } = useParams();
  console.log(id);

  return (
    <>
      <div className="w-screen ">
        <div className=" z-10 sticky top-0 left-0  border h-[55px]   md:h-[90px] bg-slate-400 flex flex-row  md:space-x-[150px] justify-center  w-screen item ">
          <div className="">
            <div className="     top-0    flex items-center shadow-lg h-[90px] md:h-[90px] bg-slate-200  z-10 sticky   border  flex-row  justify-between w-screen    ">
              <div className=" hidden md:block   relative top-2    ">
                <img
                  className="md:h-[210px] md:w-[210px] h-[200px] w-[200px]   "
                  src="https://res.cloudinary.com/dsjecjjig/image/upload/v1736416741/phd6yxxfulcqskyvemcd.png"
                />
              </div>
              <div className="     relative flex flex-row md:justify-between md:px-[100px] md:gap-20  gap-8  w-screen justify-around  ">
                <div className="relative ml-1  w-[150px] md:">
                  {" "}
                  <input
                    className=" relative h-8  text-center hover:shadow-md rounded-md w-40 md:w- "
                    placeholder="Search"
                    onChange={(e) => {
                      setSearchText(e.target.value.replace(/\s+/g, ""));
                    }}
                  ></input>{" "}
                </div>
                <div className="relative">
                  {Type == "Admin" ? (
                    <div>
                      {" "}
                      <button
                        className="relative text-md  text-gray-400 h-8  text-center  rounded-md hover:text-slate-500 "
                        onClick={() => {
                          navigate(`/addcollege`);
                        }}
                      >
                        <h1 className="hidden md:block "> Add New College </h1>
                        <h1 className=" md:hidden ">
                          {" "}
                          <FontAwesomeIcon icon={faUniversity} />{" "}
                        </h1>
                      </button>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
                {Type != "Student" ? (
                  <div className="relative">
                    {" "}
                    <button
                      className="relative text-md  text-gray-400 h-8  text-center  rounded-md hover:text-slate-500"
                      onClick={() => {
                        navigate(`/addlocations/${collegeCode}`);
                      }}
                    >
                      <h1 className="hidden md:block ">Add New Location</h1>
                      <h1 className=" md:hidden ">
                        {" "}
                        <FontAwesomeIcon icon={faLocationDot} />{" "}
                      </h1>
                    </button>
                  </div>
                ) : (
                  <div></div>
                )}

                {
                  <div
                    className="relative"
                    onClick={() => {
                      if (accType == "Admin") {
                        navigate("/admin");
                      } else {
                        navigate("/home");
                      }
                    }}
                  >
                    {" "}
                    <button className="relative text-md  text-gray-400 h-8  text-center  rounded-md hover:text-slate-500">
                      <h1 className="hidden md:block ">Home</h1>
                      <h1 className=" md:hidden ">
                        {" "}
                        <FontAwesomeIcon icon={faHome} />{" "}
                      </h1>
                    </button>
                  </div>
                }

                {
                  <div
                    className="relative"
                    onClick={() => {
                      navigate("/");
                      dispatch(logOutUser());
                      console.log("clicked");
                    }}
                  >
                    {" "}
                    <button className="relative text-md  text-gray-400 h-8  text-center  rounded-md hover:text-slate-500">
                      <h1 className="hidden md:block ">LogOut</h1>
                      <h1 className=" md:hidden ">
                        {" "}
                        <FontAwesomeIcon icon={faRightFromBracket} />{" "}
                      </h1>
                    </button>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="relative top-[100px]">
          <div className="flex justify-center items-center  ">
            {filteredLocations.length > 0 ? (
              <div className=" md:grid md:grid-cols-4 gap-4  grid grid-col-1  ">
                {filteredLocations.map((location) => (
                  <div className=" relative  " key={uuidv4()}>
                    <LocationsComponent ids={location} />
                  </div>
                ))}
              </div>
            ) : (
              <div className=" md:grid md:grid-cols-4 gap-4  grid grid-col-1  ">
                {locations.map((location) => (
                  <div className=" relative  " key={uuidv4()}>
                    <LocationsComponent ids={location} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;

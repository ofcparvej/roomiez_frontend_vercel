// import React from 'react'
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Dummy from "./dummy";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { logOutUser } from "../store/slices/authSlice";
import Shimmer from "./Shimmer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faCircleInfo,
  faMap,
  faHome,
  faArrowAltCircleLeft,
  faFaceSadCry,
  faFaceSmile,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Student = () => {
  history.pushState(null, null, location.href);
  window.onpopstate = function (event) {
    history.go(1);
  };

  const [searchText, setSearchText] = useState("");
  const data1 = useSelector((state) => state.auth);

  console.log("DAta => ", data1.accountType);
  if (data1.accountType == "") {
    navigate("/");
  }

  const dispatch = useDispatch();
  const [colleges, setColleges] = useState([{}]);
  const navigate = useNavigate();

  if (data1.accountType.length < 1) {
    navigate("/");
  }

  useEffect(() => {
    function fetchData() {
      axios
        .get("https://roomiez-backend-deployment.onrender.com/api/v1/colleges")
        .then((response) => {
          setColleges(response.data.found_colleges);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    fetchData();
  }, []);

  colleges.forEach((item) => {
    console.log(item.collegeCode);
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  const filteredClgs = colleges.filter((res) => res.collegeName == searchText);

  return (
    <div className="  ">
      <div className=" z-10 sticky top-0 left-0  border  h-[55px] bg-slate-400 flex flex-row space-x-[15px] justify-center ">
        <>
          <div className="    top-0   flex items-center shadow-lg h-[90px] md:h-[90px] bg-slate-200  z-10 sticky  w-screen  border  flex-row  justify-between   ">
            <div className=" relative top-2 hidden md:block     ">
              <img
                className="md:h-[200px] md:w-[200px] h-[200px] w-[200px]  "
                src="https://res.cloudinary.com/dsjecjjig/image/upload/v1736416741/phd6yxxfulcqskyvemcd.png"
              />
            </div>
            <div className="relative md:flex md:justify-between md:px-[100px]  md:gap-32   flex justify-center  w-screen gap-5   ">
              {/* <div className='relative text-md  text-gray-400 h-8  text-center  rounded-md hover:text-slate-500  '> <button >Home</button></div> */}
              <input
                className=" relative h-7  text-center hover:shadow-md rounded-md "
                placeholder="Search"
                onChange={(e) => {
                  setSearchText(e.target.value.replace(/\s+/g, ""));
                }}
              ></input>
              <div>
                {" "}
                <button
                  className="relative text-md  text-gray-400   text-center  rounded-md hover:text-slate-500    "
                  onClick={() => {
                    navigate("/");
                    dispatch(logOutUser());
                    console.log("clicked");
                  }}
                >
                  <h1 className="hidden md:block ">LogOut</h1>
                  <h1 className=" md:hidden ">
                    {" "}
                    <FontAwesomeIcon icon={faRightFromBracket} size="xl" />{" "}
                  </h1>
                  <div className=" text-sm text-slate-600 bg-gray-300 rounded opacity-0 hover:opacity-100 transition duration-200">
                    LogOut
                  </div>
                </button>
              </div>
            </div>
          </div>
        </>
      </div>

      {loading ? (
        <>
          <Shimmer />
        </>
      ) : (
        <>
          <main className=" flex flex-row min-h-screen justify-center items-center    ">
            <div className="  ">
              {filteredClgs.length > 0 ? (
                <div>
                  {filteredClgs.map((item) => (
                    <div
                      key={uuidv4()}
                      className="relative top-3   bg-black bg-opacity-10  "
                      style={{ margin: "60px" }}
                    >
                      <Dummy data={item} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className=" relative  top-10      bg-black bg-opacity-10 ">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {colleges.map((item) => (
                      <div
                        className="relative top-3  rounded-md   bg-slate-300 shadow-md shadow-black  p-4   "
                        style={{ margin: "60px" }}
                      >
                        <Dummy data={item} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default Student;

import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Dummy from "./dummy";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logOutUser } from "../store/slices/authSlice";
import Shimmer from "./Shimmer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Contributor = () => {
  history.pushState(null, null, location.href);
  window.onpopstate = function (event) {
    history.go(1);
  };

  const data1 = useSelector((state) => state.auth);

  // console.log("DAta => ", data1.accountType);
  if (data1.accountType == "") {
    localStorage.removeItem("token11");
    navigate("/");
  }

  useEffect(() => {
    const token = sessionStorage.getItem("authSessionToken");
    if (!token) navigate("/");
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const [colleges, setColleges] = useState([{}]);

  useEffect(() => {
    function fetchData() {
      const params = {
        collegeCode: "1002",
      };
      axios
        .get(
          "https://roomiez-backend-deployment.onrender.com/api/v1/colleges",
          {}
        )
        .then((response) => {
          setColleges(response.data.found_colleges);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    fetchData();
  }, []);

  const filteredClgs = colleges.filter((res) => res.collegeName == searchText);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      <div className=" bg-gray-200  w-screen ">
        <div className=" z-10 sticky top-0 left-0  border   h-[55px]  flex flex-row space-x-[150px] justify-center ">
          <>
            <div className="sticky top-0 z-10 flex h-[90px] w-full flex-row items-center justify-between border bg-slate-200 px-4 shadow-lg">
              <div>
                <img
                  className="h-40 w-40 md:h-40 md:w-40"
                  src="https://res.cloudinary.com/dsjecjjig/image/upload/v1736416741/phd6yxxfulcqskyvemcd.png"
                />
              </div>
              <div className="flex items-center gap-4 md:gap-8">
                <input
                  className="relative h-8 rounded-md text-center hover:shadow-md"
                  placeholder="Search"
                  onChange={(e) => {
                    setSearchText(e.target.value.replace(/\s+/g, ""));
                  }}
                ></input>
                <div className="relative  h-8 rounded-md text-center hover:shadow-md">
                  <button
                    className="relative h-8 rounded-md text-center text-md text-gray-400 "
                    onClick={() => {
                      localStorage.removeItem("token11");
                      navigate("/");
                      dispatch(logOutUser());
                      console.log("clicked");
                    }}
                  >
                    <h1 className="hidden md:block">LogOut</h1>
                    <h1 className="relative md:hidden">
                      <FontAwesomeIcon icon={faRightFromBracket} size="xl" />
                    </h1>
                    <div className="text-sm text-slate-600 bg-gray-300 rounded opacity-0 hover:opacity-100 transition duration-200">
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
    </div>
  );
};

export default Contributor;

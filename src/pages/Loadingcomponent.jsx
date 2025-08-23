import React from "react";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react"
import { CardHeader } from "@material-tailwind/react";
import { useSelector } from "react-redux";

const Loadingcomponent = (props) => {
  const navigate = useNavigate();

  const data1 = useSelector((state) => state.auth);

  // console.log("DAta => ", data1.accountType);
  if (data1.accountType == "") {
    navigate("/");
  }

    useEffect(() => {
      const token = localStorage.getItem("token11");
      if (token.length <= 4) navigate("/");
    }, []);

  return (
    <div className="   ">
      <div
        onClick={() => {
          navigate(`/locations/${props.data.collegeCode}`);
        }}
      >
        <div class="max-w-sm  rounded overflow-hidden shadow-lg h-[500px] ">
          <CardHeader
            color="blue-gray"
            className="relative w-full object-cover h-[300px] flex justify-center items-center "
          >
            <img
              className="relative object-cover  max-w-full max-h-full  rounded-md  "
              src="https://res.cloudinary.com/dsjecjjig/image/upload/v1748958412/Screenshot_2025-06-03_191525-removebg-preview_cpdqtx.png"
              alt="card-image"
            />
          </CardHeader>
          <div class="px-6 py-4">
            <div class="font-bold  mb-2 flex justify-center items-center ">
              Loading ...
            </div>
            <p class="text-gray-700 text-base  ">
              College Address :<br></br>
              Loading ...
              <br></br>
            </p>
          </div>
          <div class="px-6 pt-4 pb-2"></div>
        </div>
      </div>
    </div>
  );
};
// class="flex justify-center items-center"

export default Loadingcomponent;

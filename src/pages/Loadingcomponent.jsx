import React from "react";
import { useNavigate } from "react-router-dom";
import { CardHeader } from "@material-tailwind/react";

const Loadingcomponent = (props) => {
  const navigate = useNavigate();

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
              {/* COLLEGE CODE : {props.data.collegeCode} */}
              {/* <br></br> */}
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

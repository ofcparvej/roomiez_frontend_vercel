import React from "react";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react"

const Auth = () => {
  let navigate = useNavigate();

  history.pushState(null, null, location.href);
  window.onpopstate = function (event) {
    history.go(1);
  };

  return (
    <div className="w-screen h-screen  ">
      <div className="     flex items-center shadow-lg h-[80px]   md:h-[105px] bg-slate-200   sticky   border  flex-row  justify-between">
        <div className=" relative top-2  left-[-30px]     ">
          <img
            className="md:h-[260px] md:w-[260px] h-[200px] w-[200px]  "
            src="https://res.cloudinary.com/dsjecjjig/image/upload/v1736416741/phd6yxxfulcqskyvemcd.png"
          />
        </div>
      </div>

      <div class="flex flex-row  justify-center items-center  ">
        <div className="relative flex flex-col justify-center items-center gap-16 ">
          <div className="  lg:text-6xl mt-28 text-3xl md:text-4xl text-center md:text-center font-Montserrat  hover:underline decoration-2 ">
            {" "}
            Welcome To <span className=""> Roomiez </span>{" "}
          </div>

          <div className=" relative     lg:text-xl bg-opacity-10  hover:shadow-md  text-center font-edusahand md:text-xl text-sm     ">
            <p className="m-3 text-center">
              Your reliable companion in finding the rendal room near your
              college. We are a student-focused  platform dedicated
              to helping college-students discover nearby, affordable, and
              verified room options with ease. Roomies connects you with listings that
              suit your budget and comfort. Say goodbye to stressful
              house-hunting and let us simplify your search for a comfortable
              stay.
            </p>
          </div>

          <div className="flex flex-row space-x-6 border h-[100px]  w-4/5 md:w-1/4   items-center justify-center transition duration-300 ease-in-out hover:shadow-md gap-6 mt-10 md:mt-0  ">
            <button
              className="bg-slate-300 w-[80px] h-[45px] rounded-md  hover:border"
              onClick={() => {
                navigate("/signup");
              }}
            >
              {" "}
              Singup{" "}
            </button>
            <button
              className="bg-slate-300 w-[80px] h-[45px] rounded-md   hover:border "
              onClick={() => {
                navigate("/signin");
              }}
            >
              {" "}
              Login{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

import React from "react";
import { useState } from "react";
import axios from "axios";
import {useEffect} from "react"
import { useSelector } from "react-redux";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");

      const data1 = useSelector((state) => state.auth);

  // console.log("DAta => ", data1.accountType);
  if (data1.accountType == "") {
    localStorage.removeItem("token11");
    navigate("/");
  }

    useEffect(() => {
    const token = localStorage.getItem("token11");
    if (token.length <= 4) navigate("/");
  }, []);

  

  const handleSubmit = async (e) => {
    const user = { email, otp };
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://roomiez-backend-deployment.onrender.com/api/v1/auth/sendotp",
        { email: email }
      );
      res.data && window.location.replace("/signup");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" text-red-400 text-md font-bold underline">
        Hello Signup
      </div>
      <div>
        <form className="flex flex-col">
          <input
            type="email"
            value={email}
            className="rounded-3xl h-10 px-3 my-3 outline-none  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            value={otp}
            className="rounded-3xl h-10 px-3 my-3 outline-none  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100"
            placeholder="Otp"
            onChange={(e) => {
              setOtp(e.target.value);
            }}
          />
        </form>
        <div className="flex  ">
          <button
            className="px-8 rounded-3xl py-3 border-2 hover:bg-[#303030] border-[#303030]"
            onClick={handleSubmit}
          >
            Otp
          </button>
        </div>
      </div>
    </>
  );
};

export default Otp;

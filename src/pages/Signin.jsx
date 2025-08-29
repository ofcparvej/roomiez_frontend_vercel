import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logInUser } from "../store/slices/authSlice";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    const user = {
      email,
      password,
    };

    e.preventDefault();
    try {
      const res = await axios.post(
        "https://roomiez-backend-deployment.onrender.com/api/v1/auth/signin",
        user
      );
      let token11 = res.data.token;
      localStorage.setItem("token11", token11);
      const { email, accountType } = res.data;
      const response = { email, accountType };
      dispatch(logInUser(response));
      res.data && navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="h-screen bg-gray-200 overflow-y-hidden     ">
        <div className="     flex items-center shadow-lg h-[80px]   md:h-[105px] bg-slate-200   sticky   border  flex-row  justify-between">
          <div className=" relative top-2  left-[-30px]     ">
            <img
              className="md:h-[260px] md:w-[260px] h-[200px] w-[200px]  "
              src="https://res.cloudinary.com/dsjecjjig/image/upload/v1736416741/phd6yxxfulcqskyvemcd.png"
            />
          </div>
        </div>
        <div className="min-h-screen">
          <div className="relative flex flex-col    min-h-screen">
            <div className="relative  flex justify-center items-center  ">
              <div className="   sm:text-center text-2xl   relative  bg-gray-200  md:text-4xl text-center md:text-center md:mt-9 mt-9">
                Welcome! We're excited to have you join our community.
              </div>
            </div>
            {/* <div> */}
            {/* <> */}
            <div class="relative md:flex md:flex-row  md:justify-center md:items-center md:space-x-2   bg-gray-200 mt-5 flex items-center justify-center md:h-[500px] ">
              <div className=" relative md:flex md:border md:h-[] w-5/6 md:items-center md:justify-center bg-white   shadow-md    md:w-[450px] flex justify-center items-center h-[400px] md:top-0 top-[10px]  ">
                <div className="flex flex-col  w-[400px] pr-2 pl-2  md:pl-0 md:pr-0 ">
                  <div className="relative flex flex-col gap-1 ">
                    <input
                      type="text"
                      value={email}
                      className="relative h-7 md:h-10 px-3 my-3 outline-none  bg-gray-100  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-400 hover:border-gray-700   text-center font-light"
                      placeholder="Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <input
                      type="password"
                      value={password}
                      className="relative h-7 md:h-10 px-3 my-3 outline-none  bg-gray-100  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-400 hover:border-gray-700   text-center font-light"
                      placeholder="Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <button
                      className="relative border bg-slate-400 border-gray-200 hover:border-gray-700  text-white font-light "
                      onClick={handleSubmit}
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="relative flex flex-col gap-5">
                    <button
                      className="relative bg-slate-300  rounded-md top-4  "
                      onClick={() => {
                        navigate("/admin/signin");
                      }}
                    >
                      {" "}
                      Login As An Admin{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* </> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;

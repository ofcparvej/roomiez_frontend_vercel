import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addcollege = () => {
  const [collegeName, setcollegeName] = useState("");
  const [collegeCode, setCode] = useState("");
  const [collegeEmail, setcollegeEmail] = useState("");
  const [address, setaddress] = useState("");
  const navigate = useNavigate();

  // const token = localStorage.getItem('token11');
   useEffect(()=>{
    const token = localStorage.getItem('token11');
    if(token.length<=4) navigate("/");
    } , []);

  const handleSubmit = async (e) => {
    const college = { collegeCode, collegeName, collegeEmail, address };
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://roomiez-backend-deployment.onrender.com/api/v1/college",
        {
          collegeName: collegeName,
          collegeCode: collegeCode,
          collegeEmail: collegeEmail,
          address: address,
        }
      );
      res.data && window.location.replace(`/uploadlogo/${collegeCode}`);
    } catch (error) {
      console.log(error);
    }
  };

  // const notify = () => toast.success("College Addedd Successfully !");
  console.log("id->", collegeCode);

  return (
    <div className="        flex flex-row min-h-screen justify-center items-center  border bg-slate-200  ">
      <div className="hidden md:block">
        <div className="  relative   border  flex  flex-row   gap-x-3 space-x-5  h-[700px] w-full           ">
          <div className="relative bg-gray-400  w-1/2  sm:w-screen       ">
            <form className="relative flex flex-col top-1/4  h-1/2 justify-center items-center border  gap-2  ">
              <div>
                <input
                  className="border h-10  w-[500px] text-center font-light text-xl hover:border-gray-700"
                  placeholder="COLLEGE NAME"
                  onChange={(e) => {
                    setcollegeName(e.target.value);
                  }}
                ></input>
              </div>
              <div>
                <input
                  className="border  h-10 w-[500px]  text-center font-light text-xl hover:border-gray-700"
                  placeholder="COLLEGE CODE"
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                ></input>
              </div>
              <div>
                <input
                  className="border  h-10 w-[500px] text-center font-light text-xl hover:border-gray-700"
                  placeholder="COLLEGE EMAIL "
                  onChange={(e) => {
                    setcollegeEmail(e.target.value);
                  }}
                ></input>
              </div>
              <div>
                <input
                  className="border h-10 w-[500px] text-center font-light text-xl hover:border-gray-700 "
                  placeholder="COLLEGE ADDRESS"
                  onChange={(e) => {
                    setaddress(e.target.value);
                  }}
                ></input>
              </div>
              <div>
                <button
                  onClick={handleSubmit}
                  class="relative  bg-transparent hover:bg-slate-400 text-neutral-50 font-semibold hover:text-white py-2 px-4 border border-red-50 hover:border-transparent rounded"
                >
                  Add College
                </button>
                {/* <ToastContainer autoClose={10000} /> */}
              </div>
              <div>
                <button
                  onClick={() => {
                    navigate(`/admin`);
                  }}
                  class="relative  bg-transparent hover:bg-slate-400 text-neutral-50 font-semibold hover:text-white py-2 px-4 border border-red-50 hover:border-transparent rounded"
                >
                  Add College
                </button>
                {/* <ToastContainer autoClose={10000} /> */}
              </div>
            </form>
          </div>
          <div className="relative hidden md:block    md:h-[700px]  border bg-gray-400   md:w-1/2  content-center sm:h-0 sm:w-0 ">
            <img
              className="   w-2/3    "
              src="https://res.cloudinary.com/dsjecjjig/image/upload/v1735919068/etu1whvhzfkzwzkid2tf.png"
            />
          </div>
        </div>
      </div>

      {/* .................................................. */}

      <div className="md:hidden sm:h-screen sm:w-screen h-screen">
        <div className="  relative   border  flex  flex-row   md:gap-x-3 md:space-x-5  h-screen          ">
          <div className="relative bg-gray-400  w-screen h-screen flex items-center  ">
            {/* <div className='relative '> */}
            <form className="   ">
              <div className="relative  flex flex-col   h-1/2 justify-center items-center md:border   gap-3      ">
                <div className="relative flex justify-center items-center w-screen ">
                  <input
                    className="border h-10 w-2/3 md:w-[500px] text-center font-light text-xl hover:border-gray-700"
                    placeholder="COLLEGE NAME"
                    onChange={(e) => {
                      setcollegeName(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="relative flex justify-center items-center w-screen ">
                  <input
                    className="border  h-10 w-2/3 md:w-[500px]  text-center font-light text-xl hover:border-gray-700"
                    placeholder="COLLEGE CODE"
                    onChange={(e) => {
                      setCode(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="relative flex justify-center items-center  w-screen">
                  <input
                    className="border  h-10 w-2/3 md:w-[500px] text-center font-light text-xl hover:border-gray-700"
                    placeholder="COLLEGE EMAIL "
                    onChange={(e) => {
                      setcollegeEmail(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="relative flex justify-center items-center  w-screen">
                  <input
                    className="border h-10 w-2/3 md:w-[500px] text-center font-light text-xl hover:border-gray-700 "
                    placeholder="COLLEGE ADDRESS"
                    onChange={(e) => {
                      setaddress(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="relative flex justify-center items-center  w-screen">
                  <button
                    onClick={handleSubmit}
                    class="relative w-2/3 md:w-[500px]  bg-transparent hover:bg-slate-400 text-neutral-50 font-semibold hover:text-white py-2 px-4 border border-red-50 hover:border-transparent rounded"
                  >
                    Add College
                  </button>
                  {/* onClick={()=>{ navigate(`/locations/${id}`)}} */}
                  {/* <ToastContainer autoClose={10000} /> */}
                </div>
                <div className="relative flex justify-center items-center  w-screen">
                  <button
                    onClick={() => {
                      navigate(`/admin`);
                    }}
                    class="relative w-2/3 md:w-[500px]  bg-transparent hover:bg-slate-400 text-neutral-50 font-semibold hover:text-white py-2 px-4 border border-red-50 hover:border-transparent rounded"
                  >
                    Previous
                  </button>
                  {/* onClick={()=>{ navigate(`/locations/${id}`)}} */}
                  {/* <ToastContainer autoClose={10000} /> */}
                </div>
              </div>
            </form>
            {/* </div> */}
          </div>
          <div className="relative hidden md:block    md:h-[700px]  border bg-gray-400   md:w-1/2  content-center sm:h-0 sm:w-0 ">
            <img
              className="   w-2/3    "
              src="https://res.cloudinary.com/dsjecjjig/image/upload/v1735919068/etu1whvhzfkzwzkid2tf.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addcollege;

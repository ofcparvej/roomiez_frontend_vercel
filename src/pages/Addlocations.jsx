import React from "react";
import { useState } from "react";
import axios from "axios";
import { Textarea } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Addlocations = () => {
  const [houseOwnerName, sethouseOwnerName] = useState("");
  const [locationAddress, setlocationAddress] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [collegeCode, setcollegeCode] = useState("");
  const [expectedRent, setexpectedRent] = useState("");
  const [description, setdescription] = useState("");
  const [lat, setLatitude] = useState("");
  const [lng, setLongitude] = useState("");
  const [contributorName, setcontributorName] = useState("");
  const [contributorContactNumber, setcontributorContactNumber] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

   useEffect(()=>{
    const token = localStorage.getItem('token11');
    if(token.length<=4) navigate("/");
    } , []);

  const handleSubmit = async (e) => {
    async function fetchData() {
      const token11 = localStorage.getItem("token11");

      // e.preventDefault();
      const params = {
        collegeCode: collegeCode,
      };

      const GO_MAP_KEY = import.meta.env.VITE_GOMAPPRO_KEY;

      try {
        const data = await axios.get(
          "https://roomiez-backend-deployment.onrender.com/api/v1/getcollegeaddress",
          { params }
        );
        const destinationAddress = data.data.found_collegeAdd[0].address;
        const originAddress = locationAddress;
        const calculatedData = await axios.get(
          `https://maps.gomaps.pro/maps/api/distancematrix/json?destinations=${destinationAddress}&origins=${originAddress}&key=${GO_MAP_KEY}`
        );
        const new_origin = calculatedData.data.origin_addresses[0];
        const new_destination = calculatedData.data.destination_addresses[0];
        const foundDistance =
          calculatedData.data.rows[0].elements[0].distance.text;
        const timetoreach =
          calculatedData.data.rows[0].elements[0].distance.duration;

        const user = {
          houseOwnerName,
          locationAddress,
          contactNumber,
          collegeCode,
          expectedRent,
          description,
          token11,
          foundDistance,
          timetoreach,
          lat,
          lng,
          contributorName,
          contributorContactNumber,
        };

        const res = await axios.post(
          "https://roomiez-backend-deployment.onrender.com/api/v1/loc/",
          user
        );
        let token22 = res.data.token2;
        localStorage.setItem("token22", token22);
        res.data && fetchData2();
        await new Promise((resolve) => setTimeout(resolve, 5000));
        window.location.replace(`/addlocationdetails/${id}`);
      } catch (error) {
        console.log(error);
      }
    }

    async function fetchData2() {
      const token22 = localStorage.getItem("token22");
      const user = { token22 };
      // e.preventDefault();
      try {
        const res = await axios.post(
          "https://roomiez-backend-deployment.onrender.com/api/v1/loc/details",
          user
        );
      } catch (error) {
        console.log(error);
      }
    }
    await fetchData();
    // await fetchData2();
  };

  const notify = () => toast.success("Image Uploaded successfully !");

  return (
    <div className="  h-screen w-full  ">
      <div className=" absolute h-screen w-full   hidden md:block ">
        <div className="bg-slate-400">
          <div className="relative    flex flex-col min-h-screen justify-center items-center   border bg-slate-200   ">
            {/* <div className='relative  ' > <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={()=>{ navigate(`/locations/${id}`)}}>prev</button>  </div> */}
            <div className="relative md:bg-none md:top-0   md:border  flex  md:flex-row sm:h-[950px]  sm:gap-y-16  gap-x-3 space-x-5  md:h-[800px] md:w-full  sm:flex-col sm:bg-gray-400 sm:border-none justify-center items-center   ">
              {/* <div className='relative  ' > <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={()=>{ navigate(`/locations/${id}`)}}>prev</button>  </div> */}

              <div className="relative bg-gray-400  w-1/2  md:bottom-0 sm:bottom-14  ">
                <form className="relative flex flex-col top-1/4  md:h-1/2 justify-center items-center md:border  gap-2 sm:border-none ">
                  <div>
                    <input
                      className="border h-10 w-[500px] text-center font-light text-xl hover:border-gray-700"
                      placeholder="HOUSE OWNER NAME"
                      onChange={(e) => {
                        sethouseOwnerName(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div>
                    <input
                      className="border  h-10 w-[500px]  text-center font-light text-xl hover:border-gray-700"
                      placeholder="LOCATION ADDRESS"
                      onChange={(e) => {
                        setlocationAddress(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div>
                    <input
                      className="border  h-10 w-[500px] text-center font-light text-xl hover:border-gray-700"
                      placeholder="CONTACT NUMBER "
                      onChange={(e) => {
                        setcontactNumber(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div>
                    <input
                      className="border h-10 w-[500px] text-center font-light text-xl hover:border-gray-700 "
                      placeholder="COLLEGE CODE"
                      onChange={(e) => {
                        setcollegeCode(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div>
                    <input
                      className="border h-10 w-[500px] text-center font-light text-xl hover:border-gray-700 "
                      placeholder="EXPECTED RENT"
                      onChange={(e) => {
                        setexpectedRent(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div>
                    <input
                      className="border h-10 w-[500px] text-center font-light text-xl hover:border-gray-700 "
                      placeholder="ENTER LATITUDE"
                      onChange={(e) => {
                        setLatitude(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div>
                    <input
                      className="border h-10 w-[500px] text-center font-light text-xl hover:border-gray-700 "
                      placeholder="ENTER LONGITUDE"
                      onChange={(e) => {
                        setLongitude(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div>
                    <input
                      className="border h-10 w-[500px] text-center font-light text-xl hover:border-gray-700 "
                      placeholder="CONTRIBUTOR NAME"
                      onChange={(e) => {
                        setcontributorName(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div>
                    <input
                      className="border h-10 w-[500px] text-center font-light text-xl hover:border-gray-700 "
                      placeholder="CONTRIBUTOR CONTACT NUMBER"
                      onChange={(e) => {
                        setcontributorContactNumber(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div></div>
                </form>
              </div>
              <div className="relative bg-gray-400  w-1/2   right-2  ">
                <form className="relative flex flex-col top-1/4  h-1/2 justify-center items-center   gap-2  ">
                  <div>
                    <Textarea
                      class="relative  text-2xl "
                      rows={3}
                      size="md"
                      label="Describe a litle about location"
                      style={{ width: "700px", height: "300px" }}
                      onChange={(e) => {
                        setdescription(e.target.value);
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>

            <div className="relative flex flex-row">
              {/* <div className='relative'>hii</div> */}

              <div className="absolute bottom-6 flex justify-center items-center  w-full   ">
                <div className="flex flex-row ">
                  <div className="relative">
                    <div className="relative  ">
                      {" "}
                      <button
                        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                        onClick={() => {
                          navigate(`/locations/${id}`);
                        }}
                      >
                        prev
                      </button>{" "}
                    </div>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => {
                        if (
                          !houseOwnerName ||
                          !locationAddress ||
                          !contactNumber ||
                          !collegeCode ||
                          !expectedRent ||
                          !description ||
                          !lat ||
                          !lng ||
                          !contributorName ||
                          !contributorContactNumber
                        ) {
                          toast.error(" ❌ All fields are compolsory !");
                        } else {
                          handleSubmit();
                        }
                      }}
                      class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow "
                    >
                      Submit
                    </button>
                  </div>
                </div>

                <ToastContainer autoClose={10000} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //...................................................................... */}

      <div className=" absolute h-screen w-screen md:hidden  ">
        <div className="bg-slate-200 bg-opacity-80">
          <div className="relative      flex flex-col  gap-11  ">
            <div className="relative flex justify-center items-center top-4  ">
              {" "}
              <button
                class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={() => {
                  navigate(`/locations/${id}`);
                }}
              >
                prev
              </button>{" "}
            </div>
            <div className="relative    md:bottom-0 sm:bottom-14 flex     ">
              <form className="relative flex flex-col top-1/4  justify-center items-center   gap-2  ">
                <div>
                  <input
                    className="   border h-10  w-screen text-center font-light text-xl hover:border-gray-700 "
                    placeholder="HOUSE OWNER NAME"
                    onChange={(e) => {
                      sethouseOwnerName(e.target.value);
                    }}
                  ></input>
                </div>
                <div>
                  <input
                    className="border  h-10  w-screen  text-center font-light text-xl hover:border-gray-700"
                    placeholder="LOCATION ADDRESS"
                    onChange={(e) => {
                      setlocationAddress(e.target.value);
                    }}
                  ></input>
                </div>
                <div>
                  <input
                    className="border  h-10  w-screen text-center font-light text-xl hover:border-gray-700"
                    placeholder="CONTACT NUMBER "
                    onChange={(e) => {
                      setcontactNumber(e.target.value);
                    }}
                  ></input>
                </div>
                <div>
                  <input
                    className="border h-10  w-screen text-center font-light text-xl hover:border-gray-700 "
                    placeholder="COLLEGE CODE"
                    onChange={(e) => {
                      setcollegeCode(e.target.value);
                    }}
                  ></input>
                </div>
                <div>
                  <input
                    className="border h-10  w-screen text-center font-light text-xl hover:border-gray-700 "
                    placeholder="EXPECTED RENT"
                    onChange={(e) => {
                      setexpectedRent(e.target.value);
                    }}
                  ></input>
                </div>
                <div>
                  <input
                    className="border h-10  w-screen text-center font-light text-xl hover:border-gray-700 "
                    placeholder="ENTER LATITUDE"
                    onChange={(e) => {
                      setLatitude(e.target.value);
                    }}
                  ></input>
                </div>
                <div>
                  <input
                    className="border h-10  w-screen text-center font-light text-xl hover:border-gray-700 "
                    placeholder="ENTER LONGITUDE"
                    onChange={(e) => {
                      setLongitude(e.target.value);
                    }}
                  ></input>
                </div>
                <div>
                  <input
                    className="border h-10  w-screen text-center font-light text-xl hover:border-gray-700 "
                    placeholder="CONTRIBUTOR NAME"
                    onChange={(e) => {
                      setcontributorName(e.target.value);
                    }}
                  ></input>
                </div>
                <div>
                  <input
                    className="border h-10  w-screen text-center font-light text-xl hover:border-gray-700 "
                    placeholder="CONTRIBUTOR CONTACT NUMBER"
                    onChange={(e) => {
                      setcontributorContactNumber(e.target.value);
                    }}
                  ></input>
                </div>
                <div></div>
              </form>
            </div>
            {/* <div className='relative    border  flex   gap-x-3 space-x-5   justify-center items-center bg-red-300   '> */}
            <div className="relative   ">
              <form className="relative flex flex-col top-1/4  h-1/2 justify-center items-center  ">
                <div>
                  <Textarea
                    class="relative  text-2xl "
                    rows={3}
                    size="md"
                    style={{
                      width: "350px",
                      height: "200px",
                      border: "solid black",
                    }}
                    onChange={(e) => {
                      setdescription(e.target.value);
                    }}
                  />
                </div>
                <div>Describe about location</div>
              </form>
            </div>
            {/* </div> */}
            <div className="relative">
              <div className="relative bottom-0 flex justify-center items-center  w-full  ">
                <button
                  onClick={() => {
                    if (
                      !houseOwnerName ||
                      !locationAddress ||
                      !contactNumber ||
                      !collegeCode ||
                      !expectedRent ||
                      !description ||
                      !lat ||
                      !lng ||
                      !contributorName ||
                      !contributorContactNumber
                    ) {
                      toast.error(" ❌ All fields are compolsory !");
                    } else {
                      handleSubmit();
                    }
                  }}
                  className=" relative   bottom-0 bg-slate-400 hover:bg-slate-300 border h-20 w-[200px] rounded-lg  "
                >
                  Submit
                </button>
                <ToastContainer autoClose={10000} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addlocations;

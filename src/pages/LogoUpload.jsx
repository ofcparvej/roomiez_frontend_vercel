import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const LogoUpload = () => {
  const navigate = useNavigate();
  const [file, setfile] = useState("");
  const [image, setimage] = useState("");
  const { collegeCode } = useParams();

  const data1 = useSelector((state) => state.auth);

  // useEffect(() => {
  //     const token = sessionStorage.getItem("token11");
  //     if (!token) navigate("/");
  //   }, []);

  function previewFiles(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      // console.log(image);
      setimage(reader.result);
    };
  }
  const handleChange = (e) => {
    const file = e.target.files[0];
    // console.log(file);
    setfile(file);
    previewFiles(file); // function
  };

  const handleSubmit = async (e) => {
    // console.log("handle submit called");
    e.preventDefault();
    const result = await axios.post(
      "https://roomiez-backend-deployment.onrender.com/api/v1/imageUpload",
      {
        image: image, //from state
      }
    );
    let LogoUrl = result.data.url;
    try {
      const result2 = await axios.post(
        "https://roomiez-backend-deployment.onrender.com/api/v1/addlogo",
        {
          LogoUrl: LogoUrl,
          collegeCode: collegeCode, //from state
        }
      );
      // console.log("result2 => ", result2);
      result2 && navigate("/admin");
    } catch (err) {
      console.log(err);
    }
  };

    const notify = () => toast.success("Image Uploaded successfully !");

  return (
    <div>
      <div className="relative    flex flex-row h-screen justify-center items-center  border bg-gray-200   ">
        <div className="relative   border  flex  flex-row   gap-x-3 space-x-5  h-screen w-full    ">
          <div className="relative bg-gray-400   sm:w-screen w-screen  h-screen ">
            <form
              className=" relative top-40 flex flex-col justify-center content-center    "
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="relative flex flex-col gap-y-6  m-3  ">
                <div className="relative">
                  <label
                    for="fileInput"
                    className="bg-white text-gray-500 font-semibold text-base rounded max-w-md h-52 flex flex-col items-center justify-center cursor-pointer border-2  border-dashed mx-auto font-[sans-serif] border-red-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-11 mb-2 fill-gray-500"
                      viewBox="0 0 32 32"
                    >
                      <path
                        d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                        data-original="#000000"
                      />
                      <path
                        d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                        data-original="#000000"
                      />
                    </svg>
                    Upload file
                    <input
                      type="file"
                      id="fileInput"
                      class="hidden"
                      onChange={(e) => handleChange(e)}
                      required
                      accept="image/png , image/jpeg , image/jfif"
                    />
                     <ToastContainer autoClose={10000} />
                    <p class="text-xs font-medium text-gray-400 mt-2">
                      PNG, JPG SVG, WEBP, and GIF are Allowed.
                    </p>
                  </label>
                </div>
                <div className="relative">
                  <button className="  bg-white text-gray-500 font-semibold text-base  w-[200px]  h-40 flex flex-col items-center justify-center cursor-pointer border-2 rounded-[25px]  border-dashed mx-auto font-[sans-serif] border-red-400  ">
                    {" "}
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className=" h-[700px]  hidden md:block  border bg-gray-400   w-1/2  content-center ">
            <img
              className="   w-2/3    "
              src="https://res.cloudinary.com/dsjecjjig/image/upload/v1735919004/mlmle0svdmdhobtyyzdq.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoUpload;

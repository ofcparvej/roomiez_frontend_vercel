import React from "react";
import ImageUpload from "./ImageUpload";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {useEffect} from "react"

const Addlocationdetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

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

  return (
    <div>
      <div className="flex flex-col bg-gray-400  ">
        <div className="bg-gray-400 ">
          <div className=" relative  bg-gray-400 ">
            <ImageUpload props={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addlocationdetails;

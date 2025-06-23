import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LocationsComponent = (props) => {
  const res = props.ids;

  const navigate = useNavigate();

  const [houseOwnerName, sethouseOwnerName] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [collegeCode, setCollegeCode] = useState("");
  const [locaddress, setLocaddress] = useState("");
  const [locdetails, setLocdetails] = useState([]);
  const [expectedRent, setExpectedRent] = useState("");
  const [distance, setDistance] = useState("");
  const [isAvail, setIsAvail] = useState(false);

  useEffect(() => {
    sethouseOwnerName(res.houseOwnerName);
    setCollegeCode(res.collegeCode);
    setcontactNumber(res.contactNumber);
    setLocaddress(res.locationAddress);
    setLocdetails(res.locationDetails);
    setExpectedRent(res.expectedRent);
    setDistance(res.distance);
    setIsAvail(res.isAvailable);

  }, []);

  return (
    <div
      onClick={() => {
        navigate(`/locationdetails/${res._id}`);
      }}
    >
      <div class="max-w-sm rounded overflow-hidden shadow-lg h-[300px]">
        <div class="px-6 py-4 space-y-4 break-words">
          <div class="font-bold text-xl mb-2 break-words whitespace-normal">
            Area: <span class="break-all">{locaddress}</span>
          </div>

          <div class="text-gray-700 text-base space-y-2 break-words">
            <p class="break-all">House Owner Name: {houseOwnerName}</p>
            <p class="break-all">Contact Number: {contactNumber}</p>
            <p class="break-all">Address: {locaddress}</p>
            <p class="break-all">Distance: {distance}</p>
          </div>
        </div>

        {isAvail === true ? (
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Available
            </span>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default LocationsComponent;

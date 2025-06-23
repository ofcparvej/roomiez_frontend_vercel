import Signup from "./pages/Signup";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import React from "react";
import Signin from "./pages/Signin";
import Homepage from "./pages/Homepage";
import Locations from "./pages/Locations";
import LocationDetailsPage from "./pages/LocationDetailsPage";
import Addcollege from "./pages/Addcollege";
import ImageUpload from "./pages/ImageUpload";
import Addlocations from "./pages/Addlocations";
import Addlocationdetails from "./pages/Addlocationdetails";
import Auth from "./pages/Auth";
import LogoUpload from "./pages/LogoUpload";
import Dummy from "./pages/dummy";
import Admin from "./pages/Admin";
import { useSelector } from "react-redux";
import Student from "./pages/Student";
import Contributor from "./pages/Contributor";
import Loc from "./components/Loc";
import Shimmer from "./pages/Shimmer";

function App() {
  const data = useSelector((state) => state.auth);
  console.log("DAta => ", data.accountType);
  const accType = data.accountType;
  const ff = true;

  return (
    <div>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/loading" element={<Shimmer />} />
        <Route path="/admin" element={<Homepage />} />
        <Route path="/admin/signin" element={<Admin />} />
        <Route path="/" element={<Auth />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/home"
          element={accType === "Student" ? <Student /> : <Contributor />}
        />
        <Route path="/locations/:collegeCode" element={<Locations />} />
        <Route path="/addcollege" element={<Addcollege />} />
        <Route path="/upload" element={<ImageUpload />} />
        <Route path="/addlocations/:id" element={<Addlocations />} />
        <Route
          path="/addlocationdetails/:id"
          element={<Addlocationdetails />}
        />
        <Route path="/" element={<Auth />} />
        <Route
          path="/locationdetails/:currLocationid"
          element={<LocationDetailsPage />}
        />
        <Route path="/uploadlogo/:collegeCode" element={<LogoUpload />} />
        <Route path="/dummy" element={<Dummy />} />
        <Route path="/loccy" element={<Loc />} />
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;

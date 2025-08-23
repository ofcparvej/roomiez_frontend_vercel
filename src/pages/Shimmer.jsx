import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Loadingcomponent from "./Loadingcomponent";

const Shimmer = () => {
  history.pushState(null, null, location.href);
  window.onpopstate = function (event) {
    history.go(1);
  };

  const [searchText, setSearchText] = useState("");
  const data1 = useSelector((state) => state.auth);

  // console.log("DAta => ", data1.accountType);
  if (data1.accountType == "") {
    navigate("/");
  }

  const dispatch = useDispatch();
  const colleges = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  const navigate = useNavigate();


  const filteredClgs = colleges.filter((res) => res.collegeName == searchText);

  return (
    <div className="  ">
      <main className=" flex flex-row min-h-screen justify-center items-center    ">
        <div className="  ">
          {filteredClgs.length > 0 ? (
            <div></div>
          ) : (
            <div className=" relative  top-10      bg-black bg-opacity-10 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {colleges.map((item) => (
                  <div
                    className="relative top-3 bg-slate-300  animate-pulse  "
                    style={{ margin: "60px" }}
                  >
                    <Loadingcomponent data={item} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Shimmer;

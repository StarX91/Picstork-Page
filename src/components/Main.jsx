import React from "react";
import Live from "./Live";
import { FaImages, FaCube, FaTasks, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-black flex justify-center py-15">

      <div className="bg-neutral-950 flex flex-col lg:flex-row mx-6 lg:mx-5 lg:my-5  w-full lg:w-full rounded-3xl">
        {/* <button className="flex-col w-full lg:w-1/5 p-4">
          <Live
            name="Images"
            imgurl={<FaImages className="size-12 mx-2 my-2 text-white" />}
          />
          <Live
            name="Objects"
            imgurl={<FaCube className="size-12 mx-2 my-2 text-white" />}
          />
          <Link to="/dashboard/tasks">
          <Live
            name="Task"
            imgurl={<FaTasks className="size-12 mx-2 my-2 text-white" />}
          />
          </Link>
          <Link to="/dashboard/detectors">
          <Live
            name="Detectors"
            imgurl={<FaSearch className="size-12 mx-2 my-2 text-white" />}
          />
          </Link>
        </button> */}
        <div className="w-1/6  overflow-hidden p-4 ml-5 py-24 flex-col">
          <Live/>
        </div>
        <div className="w-full bg-neutral-950 lg:w-10/12 ">
          <Dashboard />
        </div>
      </div>
    </div>
    </>
  );
};

export default Main;

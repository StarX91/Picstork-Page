import React from "react";
import Live from "./Live";
import { FaImages, FaCube, FaTasks, FaSearch } from "react-icons/fa";
import Dashboard from "./Dashboard";

const Main = () => {
  return (
    <div className="bg-black flex justify-center h-screen py-15">
      <div className="bg-zinc-900 flex  mx-28 my-16 w-10/12 rounded-3xl">
        <div className="flex-col w-1/5 ">
          <Live
            name="Images"
            imgurl={<FaImages className="size-12 mx-2 my-2 text-white" />}
          />
          <Live
            name="Objects"
            imgurl={<FaCube className="size-12 mx-2 my-2 text-white" />}
          />
          <Live
            name="Task"
            imgurl={<FaTasks className="size-12 mx-2 my-2 text-white" />}
          />
          <Live
            name="Search"
            imgurl={<FaSearch className="size-12 mx-2 my-2 text-white" />}
          />
        </div>
        <div className="w-10/12 ">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Main;

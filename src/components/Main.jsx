import React from "react";
import Live from "./Live";
import { FaImages, FaCube, FaTasks, FaSearch } from "react-icons/fa";
import Dashboard from "./Dashboard";

const Main = () => {
  return (
    <div className="bg-black flex justify-center min-h-screen py-15">
      <div className="bg-zinc-900 flex flex-col lg:flex-row mx-6 lg:mx-28 my-16 w-full lg:w-10/12 rounded-3xl">
        <div className="flex-col w-full lg:w-1/5 p-4">
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
        <div className="w-full lg:w-10/12 p-4">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Main;

import React from "react";
import { FaImages, FaCube, FaTasks, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Live = () => {
  
  return (
    <>
    <div className="bg-neutral-400 w-full h-18 py-2 rounded-md flex my-5">
          <div className="w-16 py-2 flex justify-center rounded-full bg-neutral-800 mx-2">
            <FaImages className="size-8 mx-2 my-2 text-neutral-300  " />
          </div>
          <div className="h-full text-neutral-800 ">
            <h1 className="text-base font-semibold">Images</h1>
            <p className="text-4xl font-bold -mt-1">0</p>
          </div>
      </div>
      <div className="bg-neutral-400 w-full h-18 py-2 rounded-md flex my-5">
          <div className="w-16 py-2 flex justify-center rounded-full bg-neutral-800 mx-2">
            <FaCube className="size-8 mx-2 my-2 text-neutral-300  " />
          </div>
          <div className="h-full text-neutral-800 ">
            <h1 className="text-base font-semibold">Objects</h1>
            <p className="text-4xl font-bold -mt-1">0</p>
          </div>
      </div>
      <Link to="/dashboard/tasks">
      <div className="bg-neutral-400 w-full h-18 py-2 rounded-md flex my-5">
          <div className="w-16 py-2 flex justify-center rounded-full bg-neutral-800 mx-2">
            <FaTasks className="size-8 mx-2 my-2 text-neutral-300  " />
          </div>
          <div className="h-full text-neutral-800 ">
            <h1 className="text-base font-semibold">Tasks</h1>
            <p className="text-4xl font-bold -mt-1">0</p>
          </div>
      </div>
      </Link>
      <Link to="/dashboard/detectors">
      <div className="bg-neutral-400 w-full h-18 py-2 rounded-md flex my-5">
          <div className="w-16 py-2 flex justify-center rounded-full bg-neutral-800 mx-2">
            <FaSearch className="size-8 mx-2 my-2 text-neutral-300  " />
          </div>
          <div className="h-full text-neutral-800 ">
            <h1 className="text-base font-semibold">Detectors</h1>
            <p className="text-4xl font-bold -mt-1">0</p>
          </div>
      </div>
      </Link>
      
     </>
  );
};

export default Live;

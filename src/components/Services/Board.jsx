import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Board = () => {
  return (
    <>
    <Navbar/>
    <div className="flex bg-black min-h-screen">
      <div className="bg-zinc-900 w-full md:w-11/12 mx-4 md:mx-20 mt-8 md:mt-16 mb-12 md:mb-24 rounded-2xl p-4">
        <div className="text-center text-white mt-10">
          <p className="text-2xl md:text-[40px]">Welcome to StarMapper</p>
          <p className="text-sm md:text-[20px] pt-4 md:pt-10">
            Star-Mapper is a SaaS platform offering multiple services. Each
            service is uniquely designed with the highest security
            <br className="hidden md:block" />
            and simplicity to address the needs of the drone ecosystem
          </p>
        </div>
        <div className="space-y-4 md:space-y-8 mt-8 md:mt-12">
          {Array(3)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-zinc-800 w-full md:w-3/5 mx-auto rounded-3xl p-4 items-center"
              >
                <div className="flex-shrink-0">
                  <img
                    src=""
                    alt="img"
                    className="w-16 h-16 md:w-20 md:h-20 bg-zinc-700 rounded-full"
                  />
                </div>
                <div className="flex flex-col flex-grow md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                  <div className="text-white font-bold text-lg">
                    Software Name
                  </div>
                  <div className="text-white text-sm md:text-base mt-2">
                    Plan missions, track flights, stream videos on cloud and get
                    detailed logs for useful insights. Sync your Software
                    projects with teams for greater degree of collaborations.
                  </div>
                </div>
                <Link to="/dashboard" className="bg-zinc-600 w-full md:w-48 h-10 mt-4 md:mt-0 md:ml-6 text-white font-semibold rounded-xl">
                  Explore Now
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Board;
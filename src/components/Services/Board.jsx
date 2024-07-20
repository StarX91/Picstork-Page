import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Board = () => {
  return (
    <>
      <Navbar />
      <div className="flex bg-black h-auto justify-center">
        <div
          className="bg-neutral-950 w-full md:w-full mx-4 md:mx-20 mt-8 md:my-3 mb-12  rounded-2xl p-4
      min-[1440px]:my-36"
        >
          <div
            className="text-center text-neutral-300 mt-2
        min-[1440px]:mt-4"
          >
            <p
              className="text-xl md:text-4xl font-semibold
          "
            >
              Welcome to{" "}
              <span className="font-semibold text-neutral-400">
                StarMapper{" "}
              </span>
            </p>
            <p
              className="text-xs md:text-sm pt-2 px-36 md:pt-3 text-neutral-400
          min-[1440px]:pt-4 min-[1440px]:text-sm min-[1440px]:px-56"
            >
              Star-Mapper is a SaaS platform offering multiple services. Each
              service is uniquely designed with the highest security and
              simplicity to address the needs of the drone ecosystem
            </p>
          </div>
          {/* <div className="space-y-4 md:space-y-8 mt-8 md:mt-12">
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
              </div>
              <Link
                to="/"
                className="bg-zinc-600 w-full md:w-48 h-10 mt-4 md:mt-0 md:ml-6 py-2 px-4 text-white font-semibold rounded-xl"
              >
                Explore Now
              </Link>
            </div>
            <div className="flex flex-col md:flex-row bg-zinc-800 w-full md:w-3/5 mx-auto rounded-3xl p-4 items-center">
              <div className="flex-shrink-0">
                <img
                  src=""
                  alt="img"
                  className="w-16 h-16 md:w-20 md:h-20 bg-zinc-700 rounded-full"
                />
              </div>
              <div className="flex flex-col flex-grow md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                <div className="text-white font-bold text-lg">Star Stork</div>
                <div className="text-white text-sm md:text-base mt-2">
                  Utilize drone imagery for comprehensive analytics to enhance
                  decision-making. Opt for either training custom models or
                  employing built-in detectors for precise image analysis.
                </div>
              </div>
            ))}
        </div> */}
          <div
            className="flex justify-center mt-5
        min-[1440px]:mt-10"
          >
            <div className="bg-neutral-900 px-3 py-2 w-7/12 flex justify-evenly rounded-2xl">
              <div className="w-52 h-24 px-1  mt-1 mx-3">
                <div className=" w-full h-full aspect-square rounded-full bg-neutral-800"></div>
              </div>
              <div className=" w-full">
                <h1 className="font-bold my-1 text-neutral-500 text-xl">
                  Star Marg
                </h1>
                <p className="text-xs  text-neutral-600 font-semibold w-11/12 pb-1">
                  Plan missions,track flights, stream videos on cloud and get
                  detailed logs for useful insights. Sync your Software projects
                  with teams for greater degree of collaborations.
                </p>
              </div>
              <div className="w-72 mx-3  h-8 py-1.5  rounded-md bg-neutral-700 mt-9 transition  hover:bg-neutral-800 duration-200   cursor-pointer">
                <h1 className="text-sm text-center font-semibold text-neutral-400">
                  Explore Now
                </h1>
              </div>
            </div>
          </div>
          <div
            className="flex justify-center mt-5
        "
          >
            <div className="bg-neutral-900 px-3 py-2 w-7/12 flex justify-evenly rounded-2xl">
              <div className="w-52 h-24 px-1  mt-1 mx-3">
                <div className=" w-full h-full aspect-square rounded-full bg-neutral-800"></div>
              </div>
              <div className=" w-full">
                <h1 className="font-bold my-1 text-neutral-500 text-xl">
                  Star eXplorer
                </h1>
                <p className="text-xs  text-neutral-600 font-semibold w-11/12 pb-1">
                  Plan missions,track flights, stream videos on cloud and get
                  detailed logs for useful insights. Sync your Software projects
                  with teams for greater degree of collaborations.
                </p>
              </div>
              <div className="w-72 mx-3  h-8 py-1.5  rounded-md bg-neutral-700 mt-9 transition  hover:bg-neutral-800 duration-200   cursor-pointer">
                <h1 className="text-sm text-center font-semibold text-neutral-400">
                  Explore Now
                </h1>
              </div>
            </div>
          </div>
          <div
            className="flex justify-center mt-5 mb-2
        min-[1440px]:mb-8"
          >
            <div className="bg-neutral-900 px-3 py-2 w-7/12 flex justify-evenly rounded-2xl">
              <div className="w-52 h-24 px-1  mt-1 mx-3">
                <div className=" w-full h-full aspect-square rounded-full bg-neutral-800"></div>
              </div>
              <div className=" w-full">
                <h1 className="font-bold my-1 text-neutral-500 text-xl">
                  Star Stork
                </h1>
                <p className="text-xs  text-neutral-600 font-semibold w-11/12 pb-1">
                  Plan missions,track flights, stream videos on cloud and get
                  detailed logs for useful insights. Sync your Software projects
                  with teams for greater degree of collaborations.
                </p>
              </div>
              <div className="w-72 mx-3  h-8 py-1.5  rounded-md bg-neutral-700 mt-9 transition  hover:bg-neutral-800 duration-200   cursor-pointer">
                <Link to="/dashboard">
                  <h1 className="text-sm text-center font-semibold text-neutral-400">
                    Explore Now
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;

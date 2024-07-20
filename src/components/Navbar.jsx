// import React from "react";
// import Starx from "../assets/StarX91-Logo.svg";
// import { MdDashboard } from "react-icons/md";
// import { PiDroneFill } from "react-icons/pi";
// import { SlCalender } from "react-icons/sl";
// import { IoIosPeople } from "react-icons/io";
// import { IoSettingsSharp } from "react-icons/io5";
// import { IoIosAddCircle } from "react-icons/io";

// const Navbar = () => {
//   return (
//     // <div className="flex flex-col md:flex-row justify-between bg-black w-full h-auto md:h-21 p-4">
//     //   <div className="flex w-full md:w-36 bg-white mb-4 md:mb-0 mx-auto md:mx-0 h-12 rounded-3xl items-center justify-center">
//     //     <img src={Starx} alt="starx logo" className="h-8 md:h-8" />
//     //   </div>
//     //   <div className="flex flex-wrap bg-zinc-900  w-full md:w-1/4 rounded-3xl justify-center md:justify-between">
//     //     <button className="bg-zinc-800 w-20 h-14 ml-4  my-1 rounded-md flex flex-col items-center">
//     //       <MdDashboard className="text-zinc-300 w-8 h-8" />
//     //       <p className="text-zinc-300 text-[11px] font-semibold">Dashboard</p>
//     //     </button>
//     //     <button className="w-20 h-14 my-1 rounded-sm flex flex-col items-center">
//     //       <IoSettingsSharp className="text-zinc-300 w-8 h-8" />
//     //       <p className="text-zinc-300 text-[12px] font-semibold">Settings</p>
//     //     </button>
//     //     <button className="w-20 h-14 my-1 rounded-sm flex flex-col items-center">
//     //       <IoIosAddCircle className="text-zinc-300 w-8 h-8" />
//     //       <p className="text-zinc-300 text-[12px] font-semibold">Add</p>
//     //     </button>
//     //   </div>
//     //   <button className="flex bg-zinc-700 w-12 my-4 md:my-0 h-12 rounded-full mx-auto md:mx-0"></button>
//     // </div>

//     <div className="h-12 bg-neutral-950 flex justify-between">
//         <div className="pt-3 pl-2">
//             <img src={Starx} className="px-4 bg-white rounded-full w-20 h-5 "></img>
//         </div>
//         <div className="flex ">
//             <button className="w-20 h-10  my-1 rounded-sm flex flex-col items-center">
//             <MdDashboard className="text-zinc-400 w-8 h-8" />
//             <p className="text-zinc-400 text-[11px] font-semibold">Services</p>
//             </button>
//             <button className="w-20 h-10  my-1 rounded-sm flex flex-col items-center">
//             <MdDashboard className="text-zinc-400 w-8 h-8" />
//             <p className="text-zinc-400 text-[11px] font-semibold">Dashboard</p>
//             </button>
//             <button className="bg-zinc-800 w-20 h-10 my-1 rounded-sm flex flex-col items-center">
//             <IoSettingsSharp className="text-zinc-400 w-8 h-8" />
//             <p className="text-zinc-400 text-[12px] font-semibold">Settings</p>
//             </button>
//             <button className="w-20 h-10 my-2 rounded-sm flex flex-col items-center">
//             <IoIosAddCircle className="text-zinc-400 size-20" />
//             <p className="text-zinc-400 text-[12px] my-1 font-semibold text-center">Add</p>
//             </button>
//             </div>
//         <div className="w-8 h-8 rounded-full bg-neutral-300">

//         </div>
//     </div>
    
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Starx from "../assets/StarX91-Logo.svg";
import { MdDashboard } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logged out");
  };

  const handleEditProfile = () => {
    navigate("/edit-profile");
  };

  return (
    <div className="h-12 bg-neutral-950 flex justify-between">
      <div className="pt-3 pl-2">
        <img src={Starx} className="px-4 bg-white rounded-full w-20 h-5" alt="StarX91 Logo" />
      </div>
      <div className="flex">
        <button className="w-20 h-10 my-1 rounded-sm flex flex-col items-center">
          <MdDashboard className="text-zinc-400 w-8 h-8" />
          <p className="text-zinc-400 text-[11px] font-semibold">Services</p>
        </button>
        <button className="w-20 h-10 my-1 rounded-sm flex flex-col items-center">
          <MdDashboard className="text-zinc-400 w-8 h-8" />
          <p className="text-zinc-400 text-[11px] font-semibold">Dashboard</p>
        </button>
        <button className="bg-zinc-800 w-20 h-10 my-1 rounded-sm flex flex-col items-center">
          <IoSettingsSharp className="text-zinc-400 w-8 h-8" />
          <p className="text-zinc-400 text-[12px] font-semibold">Settings</p>
        </button>
        <button className="w-20 h-10 my-2 rounded-sm flex flex-col items-center">
          <IoIosAddCircle className="text-zinc-400 w-8 h-8" />
          <p className="text-zinc-400 text-[12px] my-1 font-semibold text-center">Add</p>
        </button>
      </div>
      <div className="relative">
        <button
          className="w-8 h-8 rounded-full bg-red-300 focus:outline-none"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {/* Circle button */}
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
            <button
              onClick={handleEditProfile}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Edit Profile
            </button>
            <button
              onClick={handleLogout}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;


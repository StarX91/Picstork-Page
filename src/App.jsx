import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Dashboard from "./components/Dashboard";
import { MdCameraIndoor } from "react-icons/md";
import TMain from "./components/Tasks/TMain";
import Dmain from "./components/Detectors/Dmain";
import Board from "./components/Services/Board";
import EditProfile from "./components/EditProfile";

const App = () => {
  return (
    // <>
    //   <div className="bg-black h-screen overflow:hidden">
    //     <Navbar />
    //     <Main />
    //   </div>
    // </>
    <Router>
      <div className="bg-black h-screen overflow:hidden ">
        {/* <Navbar /> */}
        {/* <Main /> */}
        {/* <div className="content"> */}
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/dashboard" element={<Main />} />
          <Route path="/dashboard/tasks" element={<TMain />} />
          <Route path="/dashboard/detectors" element={<Dmain />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Routes>
        {/* </div> */}
      </div>
    </Router>
  );
};

export default App;

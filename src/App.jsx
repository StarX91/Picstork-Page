import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Dashboard from "./components/Dashboard";
import { MdCameraIndoor } from "react-icons/md";
import TMain from './components/Tasks/TMain'
import Dmain from './components/Detectors/Dmain'

const App = () => {
  return (
    // <>
    //   <div className="bg-black h-screen overflow:hidden">
    //     <Navbar />
    //     <Main />
    //   </div>
    // </>
    <Router>
      <div className="bg-black h-screen overflow:hidden">
        {/* <Navbar /> */}
        {/* <Main /> */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/tasks" element={<TMain />} />
            <Route path="/detectors" element={<Dmain />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

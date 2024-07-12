import React from "react";

const PieChart = ({ title }) => {
  return (
    <div className="bg-zinc-800 p-4 rounded-md">
      <h3 className="text-white mb-4">{title}</h3>
      <div className="bg-zinc-700 w-full h-64 rounded-md"></div>
      <div className="flex justify-center mt-4">
        <div className="flex items-center mr-4">
          <div className="bg-yellow-500 w-4 h-4 rounded-full mr-2"></div>
          <span className="text-white">Completed</span>
        </div>
        <div className="flex items-center">
          <div className="bg-red-500 w-4 h-4 rounded-full mr-2"></div>
          <span className="text-white">Pending</span>
        </div>
      </div>
    </div>
  );
};

export default PieChart;

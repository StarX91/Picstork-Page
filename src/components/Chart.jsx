import React from "react";

const Chart = ({ title }) => {
  return (
    <div className="bg-zinc-800 p-4 rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white">{title}</h3>
        <button className="bg-zinc-700 p-2 rounded-md">View All</button>
      </div>
      <div className="bg-zinc-700 w-full h-64 rounded-md"></div>
    </div>
  );
};

export default Chart;

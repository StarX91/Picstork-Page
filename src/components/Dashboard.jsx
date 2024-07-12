import React from "react";
import ProjectDropdown from "./ProjectDropdown";
import Card from "./Card";
import Chart from "./Chart";
import PieChart from "./PieChart";

const Dashboard = () => {
  return (
    <div className="flex-1 p-4 lg:p-8">
      <div className="flex justify-between items-center mb-4">
        <ProjectDropdown />
        <button className="bg-zinc-600 p-2 text-white rounded-md font-semibold">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4 pb-8">
        <Card title="Sample_Windmill" date="10 June 2024" />
        <Card title="Sample_Windmill" date="10 June 2024" />
        <Card title="Sample_Windmill" date="10 June 2024" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Chart title="Objects detected" />
        <PieChart title="Task Analysis" />
      </div>
    </div>
  );
};

export default Dashboard;

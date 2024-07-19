// src/components/TaskAnalysis.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind is imported

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const TaskAnalysis = () => {
  // Example data for the pie chart
  const data = {
    datasets: [
      {
        data: [300, 50, 100, 75],
        backgroundColor: ['#520112', '#00253d', '#4a3500', '#4a0d00'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733'],
      },
    ],
    labels: ['Task A', 'Task B', 'Task C', 'Task D'],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows custom width and height
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="p-4 bg-neutral-900 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-neutral-400">Task Analysis</h2>
      <div className="relative h-56"> {/* Adjust the height as needed */}
        <Pie data={data} options={options} height={200} width={200} /> {/* Adjust width and height */}
      </div>
    </div>
  );
};

export default TaskAnalysis;

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const FishFarmUpdate = () => {
  const data = {
    labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Alive Fish',
        data: [3000, 4000, 3500, 4200, 3600, 4500, 4700, 4300],
        backgroundColor: 'rgba(81, 141, 249, 0.7)', // Light blue
      },
      {
        label: 'Diseased Fish',
        data: [1500, 2000, 2500, 2200, 2600, 3000, 2900, 2700],
        backgroundColor: 'rgba(252, 203, 73, 0.7)', // Yellow
      },
      {
        label: 'Dead Fish',
        data: [500, 700, 800, 1000, 900, 1100, 1300, 1200],
        backgroundColor: 'rgba(255, 99, 132, 0.7)', // Red
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 5000,
        ticks: {
          color: '#cbd5e1', // Light gray for y-axis
        },
      },
      x: {
        ticks: {
          color: '#cbd5e1', // Light gray for x-axis
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#cbd5e1', // Light gray for legend text
        },
      },
    },
  };

  return (
    <div className="bg-black/60 backdrop-blur-md rounded-lg p-4 shadow-md w-full max-w-lg mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-300">Fish Farm Update</h2>
        <div className="flex space-x-4 text-sm text-gray-400">
          <span>Farm - 8462A1</span>
          <span>Monthly</span>
        </div>
      </div>
      <div className="text-xs flex space-x-4 mb-4 text-gray-400">
        <div className="flex items-center space-x-1">
          <span className="bg-blue-400 w-3 h-3 rounded-full"></span>
          <span>Alive Fish</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="bg-yellow-400 w-3 h-3 rounded-full"></span>
          <span>Diseased Fish</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="bg-red-400 w-3 h-3 rounded-full"></span>
          <span>Dead Fish</span>
        </div>
      </div>
      <div className="h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default FishFarmUpdate;

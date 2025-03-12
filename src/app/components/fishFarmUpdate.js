"use client"

import {Chart, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend} from 'chart.js'
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import { Line } from 'react-chartjs-2';
import { lineChartData } from '../data/waterData';

Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend)
export const FishFarmUpdate = () => {
  const [selectedValue, setSelectedValue] = useState("Yesterday");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selectOptions = [
    { value: "Yesterday", label: "Yesterday" },
    { value: "Last Week", label: "Last Week" },
    { value: "Last Month", label: "Last Month" },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedValue(option.label); 
    setIsDropdownOpen(false); 
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          font: {
            size: 8,
            weight: "bold",
            color: '#ffff',
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 14,
            weight: "500",
            color: '#ffff',
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        font: {
          size: 20,
          weight: "bold",
        },
      },
      legend: {
        labels: {
          font: {
            size: 14,
            weight: "500",
            color: '#ffff',
          },
        },
      },
      tooltip: {
        bodyFont: {
          size: 12,
          weight: "normal",
          color: '#ffff',
        },
        titleFont: {
          size: 14,
          weight: "bold",
          color: '#ffff',
        },
      },
    },
  };

  return (
    <div className="bg-[#0a0a0a] backdrop-blur-md rounded-lg flex justify-between flex-col p-4 h-[48%] shadow-md w-full max-w-lg mx-auto">
      <div className="flex justify-between w-full items-center z-10">
        <h1 className="text-[18px] md:text-[20px] font-bold text-white">
        Fish Farm Update
        </h1>
        <div className="relative w-[100px] " >
        <RiArrowDropDownLine className={`absolute right-[0px] top-0 text-[24px] ${!isDropdownOpen ? "rotate-[180deg]" : "rotate-0"}`} />
          <div className="bg-[white] px-2 py-1 rounded-full cursor-pointer text-[12px]" onClick={toggleDropdown}>{selectedValue}</div>
          {isDropdownOpen && (
          <div className="absolute top-[110%] text-[12px] left-0 w-[100%] shadow-md rounded-md bg-[#ffffff] z-10">
          {selectOptions.map((selectOption) => (
            <div
              key={selectOption.value}
              className="p-2 cursor-pointer duration-300 rounded-md hover:bg-[#f0f0f0]"
              onClick={() => handleOptionClick(selectOption)}
            >
              {selectOption.label}
            </div>
          ))}
          </div>
          )}
        </div>
      </div>
      <div className='h-full w-full mt-[-30px]'>
        <Line options={options} data={lineChartData} height={400} className='font-bold text-[15px]' width={400} />
      </div>

    </div>
  )
}



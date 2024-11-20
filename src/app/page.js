import Image from "next/image";
import { Navbar } from "./components/NavBar";
import { Sidebar } from "./components/Sidebar";
import { DashboardCard } from "./components/DashboardCard";
import { CiCloudDrizzle } from "react-icons/ci";
import { CiDroplet } from "react-icons/ci";
import { FiBook } from "react-icons/fi";

import { FaTemperatureFull } from "react-icons/fa6";

import "./globals.css";
import FishFarmUpdate from "./components/fishFarmUpdate";

export default function Home() {
  return (
    <div className="w-[100dvw] h-[100dvh] flex flex-col">
        <Navbar/>
        <div className=" flex w-full h-[87%]">
         <Sidebar/>
          <div className="flex flex-col w-[45%] h-[50%] ml-4">
            <div className="flex flex-wrap w-[100%] h-[50%] gap-4">
            <DashboardCard title="Nitrate (NO3)" value="50 PPM" status="Normal" icon={<FiBook />} text="Optimal nitrate levels for fish health" color="white" />
          <DashboardCard title="Hardness" value="25 PPM" status="Soft" icon={<CiDroplet />} text="Soft water, ideal for specific fish species" color="dark" />
          <DashboardCard title="Buffer" value="80 PPM" status="Medium" icon={<CiCloudDrizzle />} text="Balanced buffering capacity to maintain" color="white"/>
          <DashboardCard title="Temperature" value="80°C" status="Medium" icon={<FaTemperatureFull />} text="Ideal temperature for healthy fish growth" color="white" />
            </div>
            <div className="flex h-[50%]">
            </div>
          </div>
          <div className="w-[28%] ml-2">
          <FishFarmUpdate/>
          </div>
        </div>
        {/* <div className="grid grid-cols-2 gap-4 p-6">
          <FeedUsageChart />
          <FeedStockList />
        </div> */}
    </div>
  );
}

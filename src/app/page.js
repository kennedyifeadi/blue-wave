"use client"

import Image from "next/image";
import { Navbar } from "./components/NavBar";
import { Sidebar } from "./components/Sidebar";
import { DashboardCard } from "./components/DashboardCard";
import { CiCloudDrizzle } from "react-icons/ci";
import { CiDroplet } from "react-icons/ci";
import { FiBook } from "react-icons/fi";

import { FaTemperatureFull } from "react-icons/fa6";

import "./globals.css";
import { AiInference } from "./components/Aisurmmary";
import { FishFarmUpdate } from "./components/fishFarmUpdate";
import {db, get, onValue, ref} from "./config/firebase"
import { useEffect, useState } from "react";

export default function Home() {
  const [tds, setTds] = useState(0)
  const [turbidity, setTurbidity] = useState(0)
  const [ammonia, setAmmonia] = useState(0)
  const [ph, setPh] = useState(0)

  const updateDashboard = () => {
    onValue(ref(db, "Data"), (snapshot) => {
      const Data = snapshot.val();
      setTds(Data?.tds);
      setTurbidity(Data?.turbidity);
      setPh(Data?.ph);
      setAmmonia(Data?.ammonia);
    });
   
  };


  useEffect(()=>{
    updateDashboard();
  }, [])

  return (
    <div className="w-[100%] md:h-[100dvh] overflow-x-hidden mb-3 md:mb-0 h-max flex flex-col py-2 relative">
      <div className=" flex md:flex-row flex-col px-4 py-2 w-full justify-between h-[100dvh] md:h-[90%]">
        <Sidebar />
        <div className="flex w-[100%] md:w-[45%] md:h-max md:ml-4">
          <div className="flex flex-wrap w-[100dvw] items-center h-max  gap-4">
            <DashboardCard title="Ammonia (NH3)" value={ammonia} status="Normal" icon={<FiBook />} text="Optimal nitrate levels for fish health" color="dark" />
            <DashboardCard title="Turbidity" value={`${turbidity} PPM`} status="Soft" icon={<CiDroplet />} text="Soft water, ideal for specific fish species" color="dark" />
            <DashboardCard title="TDS" value={tds} status="Medium" icon={<CiCloudDrizzle />} text="Balanced buffering capacity to maintain" color="dark" />
            <DashboardCard title="Temperature" value="80°C" status="Medium" icon={<FaTemperatureFull />} text="Ideal temperature for healthy fish growth" color="dark" />
            <DashboardCard title="PH" value={ph} status="Soft" icon={<CiDroplet />} text="Soft water, ideal for specific fish species" color="dark" />

          </div>
        </div>
        <div className="w-[100%] mt-[20px] md:mb-0 md:mt-0 md:w-[28%] h-[100%] flex items-center justify-between flex-col">
          <AiInference />
          <FishFarmUpdate />
        </div>
      </div>
      {/* <div className="grid grid-cols-2 gap-4 p-6">
          <FeedUsageChart />
          <FeedStockList />
        </div> */}
    </div>
  );
}


// api key = AIzaSyCGfvmDY4Fzjjh4gb3R7CL5BS6QadPuC8Q
// url = https://blue-wave-cf3f2-default-rtdb.firebaseio.com/
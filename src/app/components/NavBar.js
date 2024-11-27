"use client"
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import usePathname
import { FaRegBell } from "react-icons/fa";
import { MdOutlineWbSunny, MdOutlineAnalytics, MdOutlineTableChart, MdOutlineDashboard, MdOutlineManageSearch } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GiFishingNet } from "react-icons/gi";
import maleProfile from "../images/male profile 2.jpg";
import Link from "next/link";

export const Navbar = () => {
  const pathname = usePathname(); // Get current path

  return (
    <div className="h-[10%] flex w-full py-1 md:py-0">
      <div className="flex items-center md:px-4 px-2 justify-between w-full h-full">
        <div className="flex items-center w-[80%] gap-3 justify-between h-full">
          <div className="flex items-center w-[20%] text-black font-bold text-lg">
            <div className="rounded-full bg-blue-200 p-2 text-white">
              <MdOutlineAnalytics size={24} />
            </div>
            <span className="ml-2 text-[15px] md:text-[24px]">
              <span className="hidden md:flex">BlueWave</span>
              <span className="md:hidden">BW</span>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex bg-[#0a0a0a] w-[70%] md:w-[80%] items-center justify-between p-1 h-[70%] pr-3 rounded-full">
            <Link
              href="/"
              className={`${
                pathname === "/" ? "bg-[#e0f265] text-black" : "text-white"
              } w-max p-2 md:p-0 md:w-[18%] text-[12px] h-full justify-center rounded-full font-semibold flex items-center`}
            >
              <MdOutlineAnalytics className="mr-1" />
              <span className="hidden md:flex">Analysis</span>
            </Link>
            <Link
              href="/market"
              className={`${
                pathname === "/market" ? "bg-[#e0f265] text-black" : "text-white"
              } text-[15px] w-max p-2 md:p-0 md:w-[18%] h-full rounded-full justify-center font-thin flex items-center`}
            >
              <MdOutlineDashboard className="mr-1" />
              <span className="hidden md:flex">Market</span>
            </Link>
            <Link
              href="/monitoring"
              className={`${
                pathname === "/monitoring" ? "bg-[#e0f265] text-black" : "text-white"
              } text-[15px] w-max p-2 md:p-0 md:w-[18%] h-full rounded-full justify-center font-thin flex items-center`}
            >
              <MdOutlineTableChart className="mr-1" />
              <span className="hidden md:flex">Monitoring</span>
            </Link>
            <Link
              href="/fishfarm"
              className={`${
                pathname === "/fishfarm" ? "bg-[#e0f265] text-black" : "text-white"
              } text-[15px] w-max p-2 md:p-0 md:w-[18%] h-full rounded-full justify-center font-thin flex items-center`}
            >
              <GiFishingNet className="mr-1" />
              <span className="hidden md:flex">Fish Farm</span>
            </Link>
            <Link
              href="/management"
              className={`${
                pathname === "/management" ? "bg-[#e0f265] text-black" : "text-white"
              } text-[15px] w-max p-2 md:p-0 md:w-[18%] h-full rounded-full justify-center font-thin flex items-center`}
            >
              <MdOutlineManageSearch className="mr-1" />
              <span className="hidden md:flex">Management</span>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center w-[25%] justify-between pl-4 h-full">
          <CiSearch className="text-black bg-white rounded-full w-8 h-8 p-2" size={20} />
          <MdOutlineWbSunny className="text-black bg-white rounded-full w-8 h-8 p-2" size={20} />
          <FaRegBell className="text-black bg-white rounded-full w-8 h-8 p-2" size={20} />
          <div className="flex items-center w-[60%] pl-1 pr-2 gap-2 h-[70%] rounded-full bg-white">
            <Image
              src={maleProfile}
              className="rounded-full w-8 h-8 object-cover"
              alt="Profile image"
            />
            <div className="flex flex-col">
              <p className="text-black text-[10px] font-semibold">Eric Simatupang</p>
              <p className="text-gray-500 text-[10px]">Site Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

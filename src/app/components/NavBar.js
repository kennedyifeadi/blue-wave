import { FaRegBell, FaCog } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdOutlineAnalytics, MdOutlineTableChart, MdOutlineDashboard } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { MdOutlineManageSearch } from "react-icons/md";
import { GiFishingNet } from "react-icons/gi";
import maleProfile from "../images/male profile 2.jpg"

export const Navbar = () => {
  return (
    <div className="h-[10%] flex w-full ">
      <div className="flex items-center px-4  justify-between w-full h-full ">
        <div className="flex items-center w-[70%] gap-3 justify-between h-full">
          <div className="flex items-center text-black font-bold text-lg">
            <div className="rounded-full bg-blue-200 p-2 text-white">
              <MdOutlineAnalytics size={24} />
            </div>
            <span className="ml-2">BlueWave</span>
          </div>

          {/* Navigation Links */}
          <div className="flex bg-[#0a0a0a] w-[100%] items-center justify-between p-1 h-[70%] pr-3 rounded-full">
            <button className="text-black bg-[#e0f265] w-[18%] text-[12px] h-full justify-center rounded-full font-semibold flex items-center">
              <MdOutlineAnalytics className="mr-1" />
              Analysis
            </button>
            <button className="text-white text-[15px] w-[18%]  h-full rounded-full justify-center font-thin flex items-center">
              <MdOutlineDashboard className="mr-1" />
              Market
            </button>
            <button className="text-white text-[15px] w-[18%]  h-full rounded-full justify-center font-thin flex items-center">
              <MdOutlineTableChart className="mr-1" />
              Monitoring
            </button>
            <button className="text-white text-[15px] w-[18%]  h-full rounded-full justify-center font-thin flex items-center">
            <GiFishingNet className="mr-1"  />
              Fish Farm
            </button>
            <button className="text-white text-[15px] w-[18%]  h-full rounded-full justify-center font-thin flex items-center">
            <MdOutlineManageSearch className="mr-1"  />
              Management
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center w-[25%] justify-between pl-4 h-full ">
          <CiSearch className="text-black bg-white rounded-full w-8 h-8 p-2" size={20} />
          <MdOutlineWbSunny className="text-black bg-white rounded-full w-8 h-8 p-2" size={20} />
          <FaRegBell className="text-black bg-white rounded-full w-8 h-8 p-2" size={20} />
          <div className="flex items-center w-[50%] px-2 gap-2 h-[70%] rounded-full bg-white ">
            {/* <HiOutlineUserCircle className="text-black" size={24} /> */}
            <image src={maleProfile} className="rounded-full w-6 h-6 object-cover "/ >
            <div className="flex flex-col">
              <p className="text-black text-[10px] font-bold">Eric Simatupang</p>
              <p className="text-gray-500 text-[10px]">Site Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


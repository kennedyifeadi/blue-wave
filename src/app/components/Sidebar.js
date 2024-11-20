import {
    FiBarChart,
    FiFileText,
    FiSettings,
    FiDatabase,
    FiSliders,
    FiTool,
  } from 'react-icons/fi';
  import { BiDevices } from 'react-icons/bi';
  import { IoWatch } from "react-icons/io5";
  import { HiMiniSquares2X2 } from "react-icons/hi2";
  import { RiTeamFill } from "react-icons/ri";



  
export const Sidebar = () => {
    return (
      <div className="flex flex-col bg-gray-50 w-60 h-full rounded-lg p-4">
        <div className='flex text-[15px] w-full py-2 justify-between px-2 text-white font-bold rounded-full mb-2 bg-[#171717] items-center'><span>Menu</span> <HiMiniSquares2X2 />
        </div>
        <span className='font-bold mb-2 px-2 text-[12px]'>Fish Pond Analyst</span>
        <ul className="flex flex-wrap gap-3 w-full justify-between ">
          {/* Predictive Weather */}
          <li className="flex flex-col text-[15px]  items-center justify-center w-[47%] h-[70px] border bg-[#dbdbdb33] rounded-md">
            <FiBarChart className="text-black" />
            <span className='text-[11px] px-1 mt-1 flex items-center text-center w-full justify-center font-semibold text-[#000000d5]'>Predictive Weather</span>
          </li>
  
          {/* Pond Reports Analyst */}
          <li className="flex flex-col items-center justify-center w-[47%] h-[60px] border bg-[#dbdbdb33] rounded-md">
            <IoWatch className="text-black" />
            <span className='text-[11px] px-1 mt-1 flex items-center text-center w-full justify-center font-semibold text-[#000000d5]'>Pond Reports Analyst</span>
          </li>
  
          {/* Device Connected */}
          <li className="flex flex-col text-[15px] justify-center items-center w-[47%] h-[70px] border bg-[#dbdbdb33] rounded-md">
            <BiDevices className="text-black" />
            <span className='text-[11px] px-1 mt-1 flex items-center text-center w-full justify-center font-semibold text-[#000000d5]'>Device Connected</span>
          </li>
  
          {/* Fish Growth Analyst */}
          <li className="flex flex-col text-[15px] justify-center items-center w-[47%] h-[70px] border bg-[#dbdbdb33] rounded-md">
            <FiDatabase className="text-black" />
            <span className='text-[11px] px-1 mt-1 flex items-center text-center w-full justify-center font-semibold text-[#000000d5]'>Fish Growth Analyst</span>
          </li>
  
          {/* Customize Water Flow */}
          <li className="flex flex-col text-[15px] justify-center items-center w-[47%] h-[70px] border bg-[#dbdbdb33] rounded-md">
            <FiSliders className="text-black" />
            <span className='text-[11px] px-1 mt-1 flex items-center text-center w-full justify-center font-semibold text-[#000000d5]'>Customize Water Flow</span>
          </li>
  
          {/* Automated Nutrient */}
          <li className="flex flex-col text-[15px] justify-center items-center w-[47%] h-[70px] border bg-[#dbdbdb33] rounded-md">
            <FiTool className="text-black" />
            <span className='text-[11px] px-1 mt-1 flex items-center text-center w-full justify-center font-semibold text-[#000000d5]'>Automated Nutrient</span>
          </li>
  
          <div className='w-full flex flex-col gap-2'>
          <h3 className="text-[12px] font-bold text-black mt-2">General Settings</h3>
          <li className="flex items-center gap-2 text-[15px]">
            <RiTeamFill className='text-black'/>
            <span>Manage Team</span>
          </li>
  
          <li className="flex items-center gap-2 text-[15px]">
            <FiSettings className="text-black" />
            <span>System Calibration</span>
          </li>
  
          <li className="flex items-center gap-2 text-[15px]">
            <FiFileText className="text-black" />
            <span>Data Export Options</span>
          </li>
          </div>
        </ul>
  
        {/* Import Data Button */}
        <div className="mt-2">
          <button className="bg-blue-500 text-white text-[12px] w-full py-2 rounded hover:bg-blue-600">
            Import Data
          </button>
        </div>
      </div>
    );
  };
  
  
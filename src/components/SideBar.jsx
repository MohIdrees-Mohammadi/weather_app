import React from 'react'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaListUl } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import umb from "../assets/unbrela.png"
import { useNavigate, useLocation } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate()
  const location = useLocation();

  
  const isActive = (path) => location.pathname === path;

  return (
    <div className='bg-secondary bg-red-500 flex sm:flex-col justify-center lg:justify-start items-center lg:h-[97vh]  py-3  lg:gap-15 w-full lg:w-20   rounded-[10px] fixed bottom-0 left-0 lg:relative lg:bottom-auto lg:left-auto overflow-hidden'>
      <div className='flex hidden lg:block flex-col  items-center w-20'>
        <img className='w-15 sm:w-12  ml-4 sm:mb-[-20px] rounded-[10px]' 
        src={umb} alt="unbrela.png" />
      </div>

      <div className='flex lg:flex-col items-center gap-15 sm:gap-8'>

        {/* Weather */}
        <div onClick={ ()=> navigate('/home') } className='flex flex-col justify-center items-center gap-1 cursor-pointer '>
          <TiWeatherPartlySunny className={`text-[1.2em] ${isActive('/home') ? 'text-white' : 'text-gray-400'}`} />
          <span className={`hidden lg:block text-md font-semibold ${isActive('/home') ? 'text-gray-400' : 'text-gray-500'}`}>Weather</span>
        </div>

        {/* Cities */}
        <div onClick={ ()=> navigate('/home/city') } className='flex flex-col justify-center items-center gap-1 cursor-pointer'>
          <FaListUl className={`text-[1.2em] ${isActive('/home/city') ? 'text-white' : 'text-gray-400'}`} />
          <span className={`hidden lg:block text-md font-semibold ${isActive('/home/city') ? 'text-gray-400' : 'text-gray-500'}`}>Cities</span>
        </div>

        {/* Map */}
        <div onClick={ ()=> navigate('/home/map') } className='flex flex-col justify-center items-center gap-1 cursor-pointer'>
          <FaMap className={`text-[1.2em] ${isActive('/home/map') ? 'text-white' : 'text-gray-400'}`} />
          <span className={`hidden lg:block text-md font-semibold ${isActive('/home/map') ? 'text-gray-400' : 'text-gray-500'}`}>Map</span>
        </div>

        {/* Setting */}
        <div onClick={ ()=> navigate('/home/setting') } className='flex flex-col justify-center items-center gap-1 cursor-pointer'>
          <IoSettingsSharp className={`text-[1.2em] ${isActive('/home/setting') ? 'text-white' : 'text-gray-400'}`} />
          <span className={`hidden lg:block text-md font-semibold ${isActive('/home/setting') ? 'text-gray-400' : 'text-gray-500'}`}>Setting</span>
        </div>


      </div>
    </div>
  )
}

export default SideBar

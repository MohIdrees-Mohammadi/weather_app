import React from 'react'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaListUl } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import umb from "../assets/unbrela.png"
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-secondary bg-red-500 flex sm:flex-col justify-center lg:justify-start items-center lg:h-[96vh] py-3  lg:gap-15 w-full lg:w-20   rounded-[10px] fixed bottom-0 left-0 lg:relative lg:bottom-auto lg:left-auto '>
      <div className='flex hidden lg:block flex-col  items-center w-20'>
        <img className='w-15 sm:w-12  ml-4 sm:mb-[-20px] rounded-[10px]' 
        src={umb} alt="unbrela.png" />
      </div>

      <div className='flex lg:flex-col items-center gap-15 sm:gap-8'>

        
        <div onClick={ ()=> navigate('/home') } className='flex flex-col justify-center items-center gap-1 cursor-pointer '>
          <TiWeatherPartlySunny className='text-[1.2em] text-white ' />
          <span className='hidden lg:block  text-gray-400 text-md font-semibold'>Weather</span>
        </div>

        {/* Cities icon and text */}
        <div onClick={ ()=> navigate('/home/city') } className='flex flex-col justify-center items-center gap-1 cursor-pointer'>
          <FaListUl className='text-[1em] text-gray-400' />
          <span className='hidden lg:block text-gray-500 text-[0.9em] '>Cities</span>
        </div>

        {/* Map icon and text */}
        <div onClick={ ()=> navigate('/home/map') } className='flex flex-col justify-center items-center gap-1 cursor-pointer'>
          <FaMap className='text-[1em] text-gray-400' />
          <span className='hidden lg:block text-gray-500 text-[0.9em] '>Map</span>
        </div>

        {/* setting icon and text */}
        <div onClick={ ()=> navigate('/home/setting') } className='flex flex-col justify-center items-center gap-1 cursor-pointer'>
          <IoSettingsSharp className='text-[1em] text-gray-400' />
          <span className='hidden lg:block text-gray-500 text-[0.9em] '>Setting</span>
        </div>


      </div>
    </div>
  )
}

export default SideBar
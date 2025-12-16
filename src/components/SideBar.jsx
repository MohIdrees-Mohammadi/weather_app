import React from 'react'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaListUl } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import umb from "../assets/umrella.png"
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate()
  return (
    <div className='hidden lg:flex flex-col items-center gap-15 rounded-[20px] bg-secondary p-4 lg:p-6 h-[70%] lg:h-full'>
      <img src={umb} alt="icon" width={50}/>

      <div className='flex flex-col gap-8 mt-10'>

        {/* weather icon and text */}
        <div onClick={ ()=> navigate('/home') } className='flex flex-col justify-center items-center gap-2 cursor-pointer '>
          <TiWeatherPartlySunny className='text-2xl text-white' />
          <span className='hidden lg:block text-white text-md font-semibold'>Weather</span>
        </div>

        {/* Cities icon and text */}
        <div onClick={ ()=> navigate('/home/city') } className='flex flex-col justify-center items-center gap-2 cursor-pointer'>
          <FaListUl className='text-2xl text-gray-500' />
          <span className='hidden lg:block text-gray-500 text-md font-semibold'>Cities</span>
        </div>

        {/* Map icon and text */}
        <div onClick={ ()=> navigate('/home/map') } className='flex flex-col justify-center items-center gap-2 cursor-pointer'>
          <FaMap className='text-2xl text-gray-500' />
          <span className='hidden lg:block text-gray-500 text-md font-semibold'>Map</span>
        </div>

        {/* setting icon and text */}
        <div onClick={ ()=> navigate('/home/setting') } className='flex flex-col justify-center items-center gap-2 cursor-pointer'>
          <IoSettingsSharp className='text-2xl text-gray-500' />
          <span className='hidden lg:block text-gray-500 text-md font-semibold'>Setting</span>
        </div>


      </div>
    </div>
  )
}

export default SideBar
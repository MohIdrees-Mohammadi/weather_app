import React from 'react'
import map from '../assets/map.png'
import rani from '../assets/rani.png'
import sunny from '../assets/sunny.png'
import glody from '../assets/glody.png'
import { FaPlus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
import { FaLocationArrow } from "react-icons/fa";






const Map = () => {
  
  return (
    <div  className='flex'>
      <div className='w-[63%] flex flex-col gap-10 pl-2 pr-10 relative '>
        <img className='max-w-full max-h-full ' src={map}  alt="map" />
        <button className='px-6 py-2 rounded-3xl bg-blue-500 absolute top-7 left-10 cursor-pointer hover:bg-blue-400 font-bold'>Done</button>
        <div className='absolute flex flex-col  items-center gap-1 top-13 left-50 bg-secondary h-[140px] w-[140px] rounded-2xl p-4'>
          <span className='font-black text-lg'>Bilbao</span>
          <img className='w-[50px]' src={rani} alt="ran" />
          <span className='font-bold text-lg'>27°</span>
          <div className='bg-secondary rounded-[50%] absolute top-0 right-[-30px] w-3 h-3 '></div>
        </div>
        <div className='absolute flex flex-col  items-center gap-1 top-56 left-150 bg-secondary h-[140px] w-[140px] rounded-2xl p-4'>
          <span className='font-black text-lg'>Barcelona</span>
          <img className='w-[50px]' src={sunny} alt="ran" />
          <span className='font-bold text-lg'>27°</span>
          <div className='bg-secondary rounded-[50%] absolute top-8 right-[-40px] w-3 h-3 '></div>
        </div>
        <div className='absolute flex flex-col  items-center gap-1 top-84 right-148 bg-secondary h-[180px] w-[140px] rounded-2xl p-4'>
          <span className='font-black text-lg'>Madrid</span>
          <img className='w-[50px]' src={sunny} alt="ran" />
          <span className='font-bold text-lg'>31°</span>
          <button className='bg-none border-1 border-white rounded-2xl p-1.5 px-6 text-[12px]'>See details</button>
          <div className='bg-secondary rounded-[50%] absolute top-12 right-[-40px] w-3 h-3 '></div>
        </div>
        <div className='absolute flex flex-col  items-center gap-1 top-152 left-71 bg-secondary h-[140px] w-[140px] rounded-2xl p-4'>
          <span className='font-black text-lg'>Malag</span>
          <img className='w-[50px]' src={glody} alt="ran" />
          <span className='font-bold text-lg'>33°</span>
          <div className='bg-secondary rounded-[50%] absolute bottom-6 left-[-33px] w-3 h-3 '></div>
        </div>
        <div className='  flex flex-col items-center gap-7 absolute bottom-5 right-20'>
          <div className='bg-secondary flex flex-col items-center rounded-lg px-1  w-8'>
            <button className='py-2 px-2'><FaPlus /></button>
            <button className='py-2 px-2  border-gray-600 border-t'><TiMinus /></button>
          </div>
          <div className=' h-8 flex flex-col justify-center items-center rounded-lg bg-secondary w-8 p-2'>
            <button><FaLocationArrow /></button>
          </div>

        </div>
        

      </div>
      <div className='hidden lg:block w-[37%]'>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-row justify-center items-center gap-30 h-25 w-120 bg-secondary rounded-3xl relative py-5 px-2'>
          <img className='w-[70px] absolute left-5' src={rani} alt="" />
          <div className='flex flex-col gap-2 absolute left-30'>
            <span className='font-extrabold text-2xl'>Bilbao</span>
            <span className='text-gray-400'>10:23</span>
          </div>
          <span className='font-semibold text-3xl absolute right-10'>27°</span>
        </div>
        <div className='flex flex-row justify-center items-center gap-30 h-25 w-120 bg-secondary rounded-3xl relative py-5 px-2'>
          <img className='w-[70px] absolute left-5' src={sunny} alt="son" />
          <div className='flex flex-col gap-2 absolute left-30'>
            <span className='font-extrabold text-2xl'>Barcelona</span>
            <span className='text-gray-400'>10:23</span>
          </div>
          <span className='font-semibold text-3xl absolute right-10'>29°</span>
        </div>
        <div className='flex flex-row justify-center items-center gap-30 h-25 w-120 bg-secondary rounded-3xl relative py-5 px-2'>
          <img className='w-[70px] absolute left-5' src={rani} alt="" />
          <div className='flex flex-col gap-2 absolute left-30'>
            <span className='font-extrabold text-2xl'>Madrid</span>
            <span className='text-gray-400'>10:23</span>
          </div>
          <span className='font-semibold text-3xl absolute right-10'>31°</span>
        </div>
        <div className='flex flex-row justify-center items-center gap-30 h-25 w-120 bg-secondary rounded-3xl relative py-5 px-2'>
          <img className='w-[70px] absolute left-5' src={glody} alt="" />
          <div className='flex flex-col gap-2 absolute left-30'>
            <span className='font-extrabold text-2xl'>Malaga</span>
            <span className='text-gray-400'>10:23</span>
          </div>
          <span className='font-semibold text-3xl absolute right-10'>33°</span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Map
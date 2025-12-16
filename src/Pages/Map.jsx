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
    <div className='flex flex-col gap-3
     md:gap-1 md:flex-row
     lg:flex-row   lg:gap-10'
     >
      {/* Left Side - Map Section */}
      <div className='w-full h-fit md:w-[60%] flex flex-col gap-10  relative '>
        <img className='  h-100 w-120 md:w-220 md:h-157 lg:w-450 lg:h-157  ' src={map} alt="map" />
        <button className='px-3 py-1 rounded-3xl bg-blue-500 absolute top-2 left-2  cursor-pointer hover:bg-blue-400 font-bold md:top-3 md:left-3 md:px-3 md:py-1 xl:top-7 xl:left-7 xl:px-6 xl:py-2'>Done</button>
        <div className='absolute flex flex-col  items-center rounded-2xl p-2 top-8 left-28   bg-secondary w-20 h-20 md:p-4 md:h-[140px]  md:w-[140px] md:gap-1 md:top-10 md:left-23 xl:top-10 xl:left-60 '>
          <span className='font-bold md:font-black text-[10px] md:text-lg'>Bilbao</span>
          <img className='w-7 md:w-[50px]' src={rani} alt="ran" />
          <span className='font-bold text-4 md:font-bold md:text-lg'>27°</span>
          <div className='bg-secondary rounded-[50%] absolute top-0 -right-5 w-2 h-2 md:top-0 md:right-[-30px] md:w-3 md:h-3 '></div>
        </div>
        <div className='absolute flex flex-col  items-center rounded-2xl p-2 top-31 left-90   bg-secondary w-20 h-20 md:p-4 md:h-[140px]  md:w-[140px] md:gap-1 md:top-50 md:left-82 xl:left-151'>
          <span className='font-bold md:font-black text-[10px] md:text-lg'>Barcelona</span>
          <img className='w-7 md:w-[50px]' src={sunny} alt="ran" />
          <span className='font-bold text-4 md:font-bold md:text-lg'>27°</span>
          <div className='bg-secondary rounded-[50%] absolute top-0 -right-5 w-2 h-2 md:top-0 md:right-[-30px] md:w-3 md:h-3  '></div>
        </div>
        <div className='absolute flex flex-col  items-center gap-1 top-40 right-78 bg-secondary h-30 w-20 rounded-2xl p-2 
         md:gap-1 md:top-62 md:right-88 md:h-[180px] md:w-[140px] md:p-4
        xl:gap-1 xl:top-62 xl:right-135 xl:h-[180px] xl:w-[140px] xl:p-4'>
          <span className='font-bold md:font-black text-[10px] md:text-lg'>Madrid</span>
          <img className='w-7 md:w-[50px]' src={sunny} alt="ran" />
          <span className='font-bold text-4 md:font-bold md:text-lg'>31°</span>
          <button className='bg-none border border-white rounded-2xl p-1.5 px-3 text-[4px] md:p-1.5 md:px-6 md:text-[12px]'>See details</button>
          <div className='bg-secondary rounded-[50%] absolute top-7 -right-5 w-2 h-2 md:top-12 md:right-[-30px] md:w-3 md:h-3 '></div>
        </div>
        <div className='absolute flex flex-col  items-center bg-secondary rounded-2xl gap-1 top-72 left-41  h-20 w-20  p-2
         md:gap-1 md:top-108 md:left-46  md:h-[140px] md:w-[140px]  md:p-4
          xl:gap-1 xl:top-108 xl:left-69  xl:h-[140px] xl:w-[140px]  xl:p-4
          '>
          <span className='font-bold md:font-black text-[10px] md:text-lg'>Malag</span>
          <img className='w-7 md:w-[50px]' src={glody} alt="ran" />
          <span className='font-bold text-4 md:font-bold md:text-lg'>33°</span>
          <div className='bg-secondary rounded-[50%] absolute bottom-1 -left-5 w-2 h-2 md:bottom-1 md:left-[-30px] md:w-3 md:h-3 '></div>
        </div>
        <div className='  flex flex-col items-center absolute gap-7  bottom-5 right-8
        md:gap-7  md:bottom-5 md:right-8
        xl:gap-7  xl:bottom-5 xl:right-10
        '>
          <div className='bg-secondary flex flex-col items-center rounded-lg px-1  w-8'>
            <button className='py-2 px-2'><FaPlus /></button>
            <button className='py-2 px-2  border-gray-600 border-t'><TiMinus /></button>
          </div>
          <div className=' h-8 flex flex-col justify-center items-center rounded-lg bg-secondary w-8 p-2'>
            <button><FaLocationArrow /></button>
          </div>

        </div>


      </div>
      {/* Right Side - City Weather Cards */}
      <div
       className='
       w-[37%] flex flex-col items-center relative -right-37 gap-5
       md:right-0 md:gap-2 
      lg:gap-5'
      >
          <div  className='flex flex-row justify-center items-center  bg-secondary rounded-3xl relative gap-30 h-25 w-110  py-5 px-2 md:gap-30 md:h-25 md:w-80  mdp:y-5 md:px-2 xl:gap-30 xl:h-25 xl:w-120  xl:py-5 xl:px-2'>
            <img className='absolute w-[70px]  left-5 md:w-[70px]  md:left-5 xl:w-[70px]  xl:left-5'src={rani} alt="" />
            <div 
             className='flex flex-col  absolute gap-2 left-30 md:gap-2 md:left-30 xl:gap-2 xl:left-30'>
              <span className='font-extrabold text-2xl  md:text-2xl xl:text-2xl'>Bilbao</span>
              <span className='text-gray-400'>10:23</span>
            </div>
            <span className='font-semibold absolute text-3xl  right-10 md:text-3xl  md:right-6 xl:text-3xl  xl:right-10'>27°</span>
          </div>
          <div className='flex flex-row justify-center items-center  bg-secondary rounded-3xl relative gap-30 h-25 w-110  py-5 px-2 md:gap-30 md:h-25 md:w-80  mdp:y-5 md:px-2xl:gap-30 xl:h-25 xl:w-120  xl:py-5 xl:px-2'>
            <img className='absolute w-[70px]  left-5 md:w-[70px]  md:left-5 xl:w-[70px]  xl:left-5' src={sunny} alt="son" />
            <div  className='flex flex-col  absolute gap-2 left-30 md:gap-2 md:left-30 xl:gap-2 xl:left-30'>
              <span className='font-extrabold text-2xl  md:text-2xl xl:text-2xl'>Barcelona</span>
              <span className='text-gray-400'>10:23</span>
            </div>
            <span className='font-semibold absolute text-3xl  right-10 md:text-3xl  md:right-6 xl:text-3xl  xl:right-10'>29°</span>
          </div>
          <div className='flex flex-row justify-center items-center  bg-secondary rounded-3xl relative gap-30 h-25 w-110  py-5 px-2 md:gap-30 md:h-25 md:w-80  mdp:y-5 md:px-2xl:gap-30 xl:h-25 xl:w-120  xl:py-5 xl:px-2'>
            <img className='absolute w-[70px]  left-5 md:w-[70px]  md:left-5 xl:w-[70px]  xl:left-5'  src={rani} alt="" />
            <div className='flex flex-col  absolute gap-2 left-30 md:gap-2 md:left-30 xl:gap-2 xl:left-30'>
              <span className='font-extrabold text-2xl  md:text-2xl xl:text-2xl'>Madrid</span>
              <span className='text-gray-400'>10:23</span>
            </div>
            <span className='font-semibold absolute text-3xl  right-10 md:text-3xl  md:right-6 xl:text-3xl  xl:right-10'>31°</span>
          </div>
          <div className='flex flex-row justify-center items-center  bg-secondary rounded-3xl relative gap-30 h-25 w-110  py-5 px-2 md:gap-30 md:h-25 md:w-80  mdp:y-5 md:px-2xl:gap-30 xl:h-25 xl:w-120  xl:py-5 xl:px-2'>
            <img className='absolute w-[70px]  left-5 md:w-[70px]  md:left-5 xl:w-[70px]  xl:left-5' src={glody} alt="" />
            <div className='flex flex-col  absolute gap-2 left-30 md:gap-2 md:left-30 xl:gap-2 xl:left-30'>
              <span className='font-extrabold text-2xl  md:text-2xl xl:text-2xl'>Malaga</span>
              <span className='text-gray-400'>10:23</span>
            </div>
            <span className='font-semibold absolute text-3xl  right-10 md:text-3xl  md:right-6 xl:text-3xl  xl:right-10'>33°</span>
        </div>
      </div>
    </div>
  )
}

export default Map
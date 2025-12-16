import React from 'react'
import umb from "../assets/sunny.png"
import umbr from "../assets/clude.png"
import umbrr from "../assets/runing.png"
import { FaWind } from "react-icons/fa";
import { FaTemperatureLow } from "react-icons/fa";
import { IoWaterSharp } from "react-icons/io5";
import { FaSun } from "react-icons/fa";

const Home = () => {
  return (
    <div className=' flex  flex-col lg:flex-row justify-center gap-5  px-2'>
      <div className='lg:w-full'>


        <div className='flex items-center   sm:pl-15 sm:pr-10 justify-between   '>
          <div className='flex flex-col text-center '>
            <div className='flex flex-col mb-5 text-center  sm:items-start w-full'>
              <h1 className='text-3xl lg:text-3xl font-bold'>Kabul</h1>
              <h5 className='text-[11px] text-[#9399a2] mt-1' >chance of rine: 0%</h5>
            </div>

            <p
              className=' lg:mt-10  w-full text-[35px] sm:text-6xl font-bold flex justify-start '
            >31°</p>
          </div>
          <div className=' flex justify-center'>
            <img className='w-35 sm:w-50 pr-10 flex justify-center' src={umb} alt="sunny.png" />
          </div>
        </div>



        <div className='bg-secondary w-[85%] lg:w-full mt-5 py-4  sm:ml-10 lg:ml-0 rounded-[20px]'>
          <p className='ml-4 mb-3 text-gray-400'>TODAY'S FORECAST</p>
          <div className='px-3 flex gap-10  text-gray-400'>
            <div className='flex flex-col w-[50%] items-center '>
              <p className='text-center '>6:00 Am</p>
              <img className='w-15 my-5.5 ' src={umbr} alt="clude.png" />
              <p className='text-[20px] text-white text-center font-bold'>25°</p>
            </div>
            <div className='flex flex-col items-center w-[50%]'>
              <p className='text-center'>9:00 Am</p>
              <img className='w-15 my-3.5 ' src={umb} alt="sunny.png" />
              <p className='text-[20px] text-white text-center font-bold'>25°</p>
            </div>
            <div className='flex flex-col items-center w-[50%]'>
              <p className='text-center'>12:00 Am</p>
              <img className='w-15 my-5 ' src={umbr} alt="clude.png" />
              <p className='text-[20px]  pt-[2px] text-white text-center font-bold'>25°</p>
            </div>
            <div className='w-[50%] hidden sm:block'>
              <p className='text-center'>3:00 Am</p>
              <img className='w-15 my-5.5 ' src={umbr} alt="clude.png" />
              <p className='text-[20px] text-white  pt-[2px] text-center font-bold'>25°</p>
            </div>
            <div className='w-[50%] hidden sm:block'>
              <p className='text-center'>6:00 Am</p>
              <img className='w-15 my-3.5 ' src={umb} alt="sunny.png" />
              <p className='text-[20px] text-white text-center font-bold'>25°</p>
            </div>
            <div className='w-[50%] hidden sm:block'>
              <p className='text-center'>9:00 Am</p>
              <img className='w-15 my-3.5 ' src={umbrr} alt="runing.png" />
              <p className='text-[20px] text-white text-center font-bold'>25°</p>
            </div>
          </div>
        </div>

        <div className='bg-secondary flex  w-[85%] lg:w-full gap-10 mt-5 pl-5  sm:ml-10 lg:ml-0  py-5 text-gray-400 flex justify-between rounded-[20px]'>
          <div className='flex flex-col sm:w-[250px] gap-5'>
            <p className='pt-5 w-full mb-3 font-bold'>AIR CONDITION</p>


            <div>
              <div className='flex gap-3'>
                <FaTemperatureLow className='text-[15px] sm:text-[25px]  ' />
                <h1 className='text-[10px] sm:text-[20px] font-bold'>Real Feel</h1>
              </div>
              <span className='px-9  text-[15px] sm:text-[25px]  pt-5 font-bold'>30°</span>
            </div>

            <div>
              <div className='flex gap-3 ml-[-5px]'>
                <IoWaterSharp className='text-[20px] sm:text-[30px] ' />
                <h1 className='text-[10px] sm:text-[20px]  font-bold '>Chance of rain</h1>
              </div>
              <span className='px-9 text-[10px] sm:text-[20px] pt-5 font-bold'>0%</span>
            </div>

          </div>

          <div className='flex flex-col gap-8 pt-25  lg:mt-0 sm:pt-18'>

            <div>
              <div className='flex gap-3 ml-[-5px]'>
                <FaWind className='text-[20px] sm:text-[30px] ' />
                <h1 className='text-[10px] sm:text-[20px] font-bold'>Wind</h1>
              </div>
              <span className='px-9  text-[10px] sm:text-[20px] pt-5 font-bold'>0.2km/h</span>
            </div>

            <div>
              <div className='flex gap-3 ml-[-5px]'>
                <FaSun className='text-[20px] sm:text-[30px] ' />
                <h1 className='text-[10px] sm:text-[20px] font-bold'>UV Index</h1>
              </div>
              <span className='px-9  text-[10px] sm:text-[20px] pt-5 font-bold'>3</span>
            </div>

          </div>

          <button className=' hidden sm:block rounded-[20px] sm:mr-5  text-white font-bold sm:w-33 sm:h-9 sm:mt-5 bg-btn-primary  '>See More</button>

        </div>
      </div>

      <div className='bg-secondary w-[85%] mt-5  flex flex-col sm:ml-10 lg:ml-0 lg:w-[65%] rounded-[20px] font-bold text-gray-400 pr-5 mb-20'>

        <div className='flex flex-col text-[12px] sm:text-[25px] lg:text-[12px] gap-5 pl-5'>
          <p className='text-[11px]  font-bold mt-8 mb-5'>7-DAY FORECAST</p>

          <div className='flex justify-bettwen w-full  items-center  gap-12 sm:gap-25 border-b border-gray-500 pb-5 '>
            <h4>Today</h4>
            <div className='flex gap-3 sm:gap-6 lg:gap-3 items-center'>
              <img className='w-10 sm:w-20 lg:w-10' src={umb} alt="sun.png" />
              <h4>suuny</h4>
            </div>
            <p><span className='text-white '>27</span>/22</p>
          </div>

          <div className='flex justify-bettwen items-center gap-12 sm:gap-25 border-b border-gray-500 pb-5'>
            <h4>Today</h4>
            <div className='flex gap-3 sm:gap-6 lg:gap-3 items-center'>
              <img className='w-10  sm:w-20 lg:w-10' src={umb} alt="sun.png" />
              <h4>suuny</h4>
            </div>
            <p><span className='text-white '>36</span>/20</p>
          </div>

          <div className='flex justify-bettwen items-center gap-12 sm:gap-25 border-b border-gray-500 pb-5'>
            <h4>Today</h4>
            <div className='flex gap-3 sm:gap-6 lg:gap-3 items-center'>
              <img className='w-10  sm:w-20 lg:w-10' src={umb} alt="sun.png" />
              <h4>suuny</h4>
            </div>
            <p><span className='text-white '>28</span>/17</p>
          </div>

          <div className='flex justify-bettwen items-center gap-10 sm:gap-25 border-b border-gray-500 pb-5'>
            <h4>Today</h4>
            <div className='flex gap-3 sm:gap-6 lg:gap-3 items-center'>
              <img className='w-15  sm:w-20 lg:w-10 my-2 ' src={umbr} alt="clude.png" />
              <h4>suuny</h4>
            </div>
            <p className='pl-3'><span className='text-white '>21</span>/15</p>
          </div>

          <div className='flex justify-bettwen items-center gap-10 sm:gap-25 border-b border-gray-500 pb-5'>
            <h4>Today</h4>
            <div className='flex gap-2 sm:gap-6 lg:gap-3 items-center'>
              <img className='w-15  sm:w-20 lg:w-10 my-2 ' src={umbr} alt="clude.png" />
              <h4>suuny</h4>
            </div>
            <p className='pl-2'><span className='text-white '>26</span>/16</p>
          </div>

          <div className='flex justify-bettwen items-center gap-12 sm:gap-25 border-b border-gray-500 pb-5'>
            <h4>Today</h4>
            <div className='flex gap-3 sm:gap-6 lg:gap-3 items-center'>
              <img className='w-10  sm:w-20 lg:w-10' src={umb} alt="sun.png" />
              <h4 className='font-bold'>suuny</h4>
            </div>
            <p ><span className='text-white '>39</span>/19</p>
          </div>

          <div className=' flex justify-bettwen items-center gap-10 sm:gap-25 pb-5'>
            <h4>Today</h4>
            <div className='flex gap-2 sm:gap-6 lg:gap-3 items-center'>
              <img className='w-15  sm:w-20 lg:w-10 mt-[-6px] ' src={umbrr} alt="runing.png" />
              <h4 className='font-bold'>suuny</h4>
            </div>
            <p className='pl-2'><span className='text-white '>38</span>/21</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
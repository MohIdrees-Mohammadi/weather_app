import React from 'react'
import umb from "../assets/umrella.png"
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-primary h-screen flex flex-col sm:flex-row p-5 sm:p-7 md:p-12 gap-5'>
      <div className='bg-secondary sm:w-[50%] h-[40%] sm:h-full rounded-md flex justify-center items-center'>
        <img src={umb} alt="umbrella photo" />
      </div>
      <div className=' flex flex-col justify-center items-center sm:w-[50%] h-[60%] sm:h-full my-10 md:mt-0'>
        <img className='hidden md:block w-20' src={umb} alt="" />
        <div className='flex flex-col gap-3 my-3 md:my-8'>
          <h1 className='text-8xl font-bold text-white'>Breez</h1>
          <h2 className='text-4xl font-medium text-gray-100/80  text-center'>Weather App</h2>
        </div>
        <button 
        onClick={() => navigate("/home")}
        className='bg-btn-primary px-7 py-3 text-2xl rounded-[50px] font-semibold text-white mt-7 cursor-pointer'>Get Started</button>
      </div>
    </div>
  )
}

export default Welcome
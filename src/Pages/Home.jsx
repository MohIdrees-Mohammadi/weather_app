import React from 'react'
import sunny from "../assets/sunny.png"
import axios from 'axios'
import DetailsTemp from '@/components/DetailsTemp'
const Home = () => {
  const [toggle, setToggle] = React.useState(false)
  const [temp, setTemp] = React.useState(null)
  const [completeData, setCompleteData] = React.useState(null)

  const data = async () => {
    const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=kabul&appid=e98b2575eec19db0cf6d6917d0618239&units=metric")
    console.log(response);
    setCompleteData(response.data)
    setTemp(Math.round(response.data.main.temp))

  }



  React.useEffect(() => {
    data()
  }, [])



  return (
    <div className='flex '>
      <div className='w-[63%] flex flex-col gap-10 pl-2 pr-10'>
        
         {/* Temperature container  */}
            <div className='flex items-center justify-between'>
              {/* temp content  */}
              <div className='flex flex-col gap-12 pl-5'>
                {/* title */}
                <div className='flex flex-col gap-3'>
                  <h1 className='text-4xl font-bold'>Madrid</h1>
                  <p className='text-gray-200 text-md'>chance of rain: 0%</p>
                </div>
                {/* temp */}
                <span className='font-extrabold text-5xl'>{temp}°</span>
              </div>

              <img className='w-10 lg:w-60' src={sunny} alt="" />
            </div>

        {toggle ? <DetailsTemp props={completeData} /> : (
          <>
           

            <div className='bg-secondary rounded-[20px] p-5'>
              <span>Today's forecast</span>
              <div className='flex mt-7'>
                <div className='w-[50%] flex flex-col items-center gap-3 border-r-1 border-gray-600 '>
                  <span>10:00</span>
                  <img src={sunny} alt="" width={50} />
                  <span>20°</span>
                </div>
                <div className='w-[50%] flex flex-col items-center gap-3 border-r-1 border-gray-600 '>
                  <span>10:00</span>
                  <img src={sunny} alt="" width={50} />
                  <span>20°</span>
                </div>
                <div className='w-[50%] flex flex-col items-center gap-3 border-r-1 border-gray-600 '>
                  <span>10:00</span>
                  <img src={sunny} alt="" width={50} />
                  <span>20°</span>
                </div>
                <div className='w-[50%] flex flex-col items-center gap-3 border-r-1 border-gray-600 '>
                  <span>10:00</span>
                  <img src={sunny} alt="" width={50} />
                  <span>20°</span>
                </div>
                <div className='w-[50%] flex flex-col items-center gap-3 border-r-1 border-gray-600 '>
                  <span>10:00</span>
                  <img src={sunny} alt="" width={50} />
                  <span>20°</span>
                </div>
                <div className='w-[50%] flex flex-col items-center gap-3 border-r-1 border-gray-600 '>
                  <span>10:00</span>
                  <img src={sunny} alt="" width={50} />
                  <span>20°</span>
                </div>
                <div className='w-[50%] flex flex-col items-center gap-3  '>
                  <span>10:00</span>
                  <img src={sunny} alt="" width={50} />
                  <span>20°</span>
                </div>

              </div>
            </div>

            <div className='relative bg-secondary p-5 rounded-[20px]'>
              <span>Air Conditions</span>

              <div className='flex mt-8'>
                {/* left */}
                <div className='w-[50%] flex flex-col items-start gap-7'>

                  <div className='flex flex-col items-center '>
                    <div className='flex gap-3'>
                      <span>icon</span>
                      <span>Real Feel</span>
                    </div>
                    <span className='text-xl font-bold'>20°</span>
                  </div>

                  <div className='flex flex-col items-center '>
                    <div className='flex gap-3'>
                      <span>icon</span>
                      <span>Real Feel</span>
                    </div>
                    <span className='text-xl font-bold'>20°</span>
                  </div>

                </div>

                {/* right */}
                <div className='w-[50%] flex flex-col items-start gap-7'>
                  <div className='flex flex-col items-center '>
                    <div className='flex gap-3'>
                      <span>icon</span>
                      <span>Real Feel</span>
                    </div>
                    <span className='text-xl font-bold'>20°</span>
                  </div>

                  <div className='flex flex-col items-center '>
                    <div className='flex gap-3'>
                      <span>icon</span>
                      <span>Real Feel</span>
                    </div>
                    <span className='text-xl font-bold'>20°</span>
                  </div>
                </div>
              </div>

              <button onClick={() => setToggle(true)} className='px-6 py-2 rounded bg-blue-400 absolute top-5 right-5 cursor-pointer hover:bg-blue-500'>See more</button>
            </div>
          </>
        )}


      </div>
      <div className='hidden lg:block w-[37%]'>right</div>
    </div>
  )
}

export default Home
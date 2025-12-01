import React from 'react'
import sunny from "../assets/sunny.png"
import axios from 'axios'
const Home = () => {

  const [temp, setTemp ] = React.useState(null)

  const data =  async () => {
    const response =  await axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
    console.log(response);
    setTemp(response.data.current.temperature_2m)

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
          <div className='flex flex-col gap-12'>
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



        <div>2</div>
        <div>3</div>
      </div>
      <div className='hidden lg:block w-[37%]'>right</div>
    </div>
  )
}

export default Home
import React from 'react'
import umb from "../assets/sunny.png"
import umbr from "../assets/clude.png"
import umbrr from "../assets/runing.png"
import { FaWind, FaTemperatureLow, FaSun } from "react-icons/fa";
import { IoWaterSharp } from "react-icons/io5";
import axios from 'axios';

const Home = () => {
  const [temp, setTemp] = React.useState(null);
  const [city, setCity] = React.useState("Kabul");
  const [weatherType, setWeatherType] = React.useState("Clear");
  const [rainChance, setRainChance] = React.useState(0);
  const [forecast, setForecast] = React.useState([]);
  const [air, setAir] = React.useState({ feel: 0, wind: 0, humidity: 0 });

  const data = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const API_KEY = "e98b2575eec19db0cf6d6917d0618239";
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`);
        setTemp(Math.round(response.data.main.temp));
        setCity(response.data.name);
        setWeatherType(response.data.weather[0].main);
        setAir({ feel: Math.round(response.data.main.feels_like), wind: response.data.wind.speed, humidity: response.data.main.humidity });

        const fRes = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`);
        setForecast(fRes.data.list);
        setRainChance(Math.round(fRes.data.list[0].pop * 100));
      } catch (err) { console.log(err) }
    });
  };

  React.useEffect(() => { data(); }, []);

  const getIcon = (type) => {
    if (type === "Clear") return umb;
    if (type === "Clouds") return umbr;
    return umbrr;
  };

  const getDayName = (plusDays) => {
    if (plusDays === 0) return "Today";
    const d = new Date();
    d.setDate(d.getDate() + plusDays);
    return d.toLocaleDateString('en', { weekday: 'short' });
  };

  return (
    <div className=' flex  flex-col lg:flex-row lg-screen  justify-center gap-5 '>
      <div className='  lg:w-[68%] lg:h-[100vh] lg:mb-0'>

        <div className='flex items-center lg:h-[28%]  sm:pl-5 pt-5 lg:pt-0 justify-between   '>
          <div className='flex flex-col text-center '>
            <div className='flex flex-col text-center  sm:items-start w-full'>
              <h1 className='text-3xl lg:text-3xl m-2  font-bold'>{city}</h1>
              <h5 className='text-[9px] text-[#9399a2] ml-2' >chance of rine: {rainChance}%</h5>
            </div>
            <p className=' w-full text-[35px] sm:text-5xl m-2  pt-8 font-bold flex justify-start'>{temp} °</p>
          </div>
          <div className=' flex justify-center'>
            <img className='w-35 sm:w-45 flex justify-center' src={getIcon(weatherType)} alt="weather" />
          </div>
        </div>


        
        <div className='bg-secondary md:w-full lg:h-[32%] mb-2 rounded-[20px] p-4 2xl:p-6 flex flex-col justify-center overflow-hidden'>
          <p className='text-[10px] xl:text-xs 2xl:text-sm font-bold text-gray-400 mb-3  uppercase tracking-widest ml-1'>
            TODAY'S FORECAST
          </p>

          <div className='flex items-center justify-between text-gray-400'>
            {[0, 1, 2, 3, 4, 5].map((idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center flex-1 py-1  ${idx !== 5 ? 'border-r border-gray-700/50' : ''}`}
              >

                <p className='text-xs xl:text-base 2xl:text-lg mb-2 xl:mb-3 font-medium'>
                  {forecast[idx] ? new Date(forecast[idx].dt * 1000).getHours() : (6 + idx * 3)}:00
                </p>

                <img
                  className='w-10 h-10 sm:w-12 xl:w-16 2xl:w-20 xl:h-16 2xl:h-20 object-contain mb-2 xl:mb-3 transition-transform duration-300 hover:scale-110'
                  src={forecast[idx] ? getIcon(forecast[idx].weather[0].main) : umb}
                  alt="icon"
                />


                <p className='text-base xl:text-2xl 2xl:text-3xl text-white font-bold'>
                  {forecast[idx] ? Math.round(forecast[idx].main.temp) : "--"}°
                </p>
              </div>
            ))}
          </div>
        </div>


        <div className='bg-secondary flex  pl-5 pb-1 lg:justify-between text-gray-400 gap-5 rounded-[20px] md:flex-row md:w-[85%] md:w-full lg:h-[30%] lg:ml-0 items center'>
          <div className='flex justify-between w-[70%] items-center '>
            <div className='flex flex-col gap-4 lg:mt-0'>
              <p className='w-full  pt-5 text-auto'>AIR CONDITION</p>
              <div>
                <div className='flex gap-3'>
                  <FaTemperatureLow className='text-[15px] sm:text-[1.4em]' />
                  <h1 className='text-[10px] sm:text-[0.9em]'>Real Feel</h1>
                </div>
                <span className='px-9 text-[15px] sm:text-[1.2em] text-gray-300 pt-5 font-bold'>{air.feel}°</span>
              </div>
              <div>
                <div className='flex gap-3 ml-[-5px]'>
                  <IoWaterSharp className='text-[20px] sm:text-[1.4em]' />
                  <h1 className='text-[10px] sm:text-[0.9em]'>Humidity</h1>
                </div>
                <span className='px-9 text-[10px] sm:text-[1.2em] text-gray-300 pt-5 font-bold'>{air.humidity}%</span>
              </div>
            </div>
            <div className='flex flex-col gap-5 pt-14 lg:mt-0'>
              <div>
                <div className='flex gap-3 ml-[-5px]'>
                  <FaWind className='text-[20px] sm:text-[1.4em]' />
                  <h1 className='text-[10px] sm:text-[0.9em] text-gray-300'>Wind</h1>
                </div>
                <span className='px-7 text-[15px] sm:text-[1.1em] text-gray-300 pt-5 font-bold'>{air.wind} km/h</span>
              </div>
              <div>
                <div className='flex gap-3 ml-[-5px]'>
                  <FaSun className='text-[20px] sm:text-[1.4em]' />
                  <h1 className='text-[10px] sm:text-[0.9em]'>UV Index</h1>
                </div>
                <span className='px-9 text-[10px] sm:text-[1.2em] text-gray-300 font-bold'>3</span>
              </div>
            </div>
          </div>
          <button className='bg-btn-primary w-25 h-7  mt-4 mr-5 rounded-[20px] text-[13px] text-white font-bold cursor-pointer lg:w-22 lg:h-7 lg:mr-10 '>See More</button>
        </div>
      </div>


      
      <div className='bg-secondary w-full lg:w-[34%] lg:h-[91vh] rounded-[20px] px-4 py-2 flex flex-col overflow-hidden'>
        <p className='text-[10px] xl:text-xs font-bold text-gray-400 py-3 uppercase tracking-widest'>
          7-DAY FORECAST
        </p>

        
        <div className='flex flex-col flex-1 justify-between pb-2'>
          {[0, 8, 16, 24, 32, 39, 39].map((dataIdx, dayIdx) => {
            const item = forecast[dataIdx];
            const isLast = dayIdx === 6;

            return (
              <div
                key={dayIdx}
                className={`flex items-center justify-between py-1 xl:py-2 2xl:py-4 ${!isLast ? 'border-b border-gray-700/40' : ''}`}
              >
                
                <p className='text-xs xl:text-sm text-gray-400 font-bold w-12'>
                  {getDayName(dayIdx)}
                </p>

                
                <div className='flex items-center gap-3 flex-1 justify-center'>
                  <img
                    className='w-9 h-9 xl:w-11 xl:h-11 object-contain'
                    src={item ? getIcon(item.weather[0].main) : umb}
                    alt="icon"
                  />
                  <h4 className='text-[11px] xl:text-sm text-white font-bold min-w-[50px]'>
                    {item ? item.weather[0].main : "Sunny"}
                  </h4>
                </div>

                
                <p className='text-xs xl:text-sm font-bold w-14 text-right'>
                  <span className='text-white'>
                    {item ? Math.round(item.main.temp_max) : "27"}
                  </span>
                  <span className='text-gray-500'>
                    /{item ? Math.round(item.main.temp_min) : "22"}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>



    </div>
  )
}
export default Home

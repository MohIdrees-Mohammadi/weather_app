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
      <div className='  lg:w-[68%] lg:h-[100vm] lg:mb-0'>
        
        <div className='flex items-center lg:h-[30%]  sm:pl-5 pt-5 lg:pt-0 justify-between   '>
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

        
        <div className='bg-secondary md:w-[85%] md:w-full items-center   lg:h-[34%] pb-2 mb-3 lg:ml-0 rounded-[20px] '>
          <p className='ml-5 pt-5 mb-3 text-[0.6em] text-gray-400'>TODAY'S FORECAST</p>
          <div className='flex h-auto items-center  text-gray-400'>
            
            <div className='flex flex-col w-[50%] h-full items-center border-r border-gray-700 '>
              <p className='text-center text-base '>{forecast[0] ? new Date(forecast[0].dt * 1000).getHours() : "6"}:00</p>
              <img className='w-[60%] h-auto  my-[1em] ' src={forecast[0] ? getIcon(forecast[0].weather[0].main) : umb} alt="icon" />
              <p className='text-sm text-white text-center font-bold'>{forecast[0] ? Math.round(forecast[0].main.temp) : "--"}°</p>
            </div>

            <div className='flex flex-col items-center  w-[50%] h-full border-r border-gray-700'>
              <p className='text-center text-base'>{forecast[1] ? new Date(forecast[1].dt * 1000).getHours() : "9"}:00</p>
              <img className='w-[60%] h-auto my-[1em] ' src={forecast[1] ? getIcon(forecast[1].weather[0].main) : umb} alt="icon" />
              <p className='text-sm text-white text-center font-bold'>{forecast[1] ? Math.round(forecast[1].main.temp) : "--"}°</p>
            </div>

            <div className='flex flex-col items-center w-[50%] h-full border-r border-gray-700'>
              <p className='text-center text-base'>{forecast[2] ? new Date(forecast[2].dt * 1000).getHours() : "12"}:00</p>
              <img className='w-[60%] h-auto my-[1em] ' src={forecast[2] ? getIcon(forecast[2].weather[0].main) : umb} alt="icon" />
              <p className='text-sm  pt-[2px] text-white text-center font-bold'>{forecast[2] ? Math.round(forecast[2].main.temp) : "--"}°</p>
            </div>

            <div className='flex flex-col w-[50%] h-full items-center pr-4 border-r border-gray-700 '>
              <p className='text-center text-base'>{forecast[3] ? new Date(forecast[3].dt * 1000).getHours() : "3"}:00</p>
              <img className='w-[60%] h-auto my-[1em] ' src={forecast[3] ? getIcon(forecast[3].weather[0].main) : umb} alt="icon" />
              <p className='text-sm text-white text-center font-bold'>{forecast[3] ? Math.round(forecast[3].main.temp) : "--"}°</p>
            </div>

            <div className='flex flex-col w-[50%] h-full items-center pr-4 border-r border-gray-700'>
              <p className='text-center text-base'>{forecast[4] ? new Date(forecast[4].dt * 1000).getHours() : "6"}:00</p>
              <img className='w-[60%] h-auto my-[1em] ' src={forecast[4] ? getIcon(forecast[4].weather[0].main) : umb} alt="icon" />
              <p className='text-sm text-white text-center  font-bold'>{forecast[4] ? Math.round(forecast[4].main.temp) : "--"}°</p>
            </div>

            <div className='flex flex-col w-[50%] h-full items-center '>
              <p className='text-center text-base'>{forecast[5] ? new Date(forecast[5].dt * 1000).getHours() : "9"}:00</p>
              <img className='w-[50%] h-auto  my-[0.3em] ' src={forecast[5] ? getIcon(forecast[5].weather[0].main) : umb} alt="icon" />
              <p className='text-sm text-white text-center font-bold'>{forecast[5] ? Math.round(forecast[5].main.temp) : "--"}°</p>
            </div>

          </div>
        </div>

        
        <div className='bg-secondary flex  pl-5 lg:justify-between text-gray-400 gap-5 rounded-[20px] md:flex-row md:w-[85%] md:w-full lg:h-[34%] lg:ml-0 items center'>
          <div className='flex justify-between w-[70%] items-center '>
            <div className='flex flex-col gap-5 lg:mt-0'>
              <p className='w-full font-bold pt-5 text-[0.7em]'>AIR CONDITION</p>
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

      
      <div className='bg-secondary w-full lg:h-[90vh] h-full mb-15 flex flex-col lg:w-[34%] lg:mb-0 lg:ml-0 rounded-[20px] font-bold text-gray-400 px-5 items-center  '>
        <div className='flex flex-col h-full w-full'>
          <p className='sm:text-[1.3em] lg:text-[0.9em] pb-5 font-bold pt-5'>7-DAY FORECAST</p>
          
          <div className='flex justify-bettwen w-full h-[33%] items-center  gap-7.5 sm:gap-25 lg:gap-16 border-b border-gray-500 pb-1'>
            <h4>{getDayName(0)}</h4>
            <div className='flex gap-25 sm:gap-30 my-5 lg:gap-15 items-center'>
              <img className='w-12 sm:w-25 lg:w-13 ' src={forecast[0] ? getIcon(forecast[0].weather[0].main) : umb} alt="icon" />
              <h4>{forecast[0] ? forecast[0].weather[0].main : "sunny"}</h4>
            </div>
            <p><span className='text-white '>{forecast[0] ? Math.round(forecast[0].main.temp_max) : "27"}</span>/{forecast[0] ? Math.round(forecast[0].main.temp_min) : "22"}</p>
          </div>

          <div className='flex justify-bettwen items-center gap-13 sm:gap-30 lg:gap-21 border-b border-gray-500 h-[35%] pb-1'>
            <h4>{getDayName(1)}</h4>
            <div className='flex gap-25 sm:gap-30 lg:gap-15 items-center'>
              <img className='w-12  sm:w-25 lg:w-13' src={forecast[8] ? getIcon(forecast[8].weather[0].main) : umb} alt="icon" />
              <h4>{forecast[8] ? forecast[8].weather[0].main : "sunny"}</h4>
            </div>
            <p><span className='text-white '>{forecast[8] ? Math.round(forecast[8].main.temp_max) : "36"}</span>/{forecast[8] ? Math.round(forecast[8].main.temp_min) : "20"}</p>
          </div>

          <div className='flex justify-bettwen items-center h-[34%] gap-12 sm:gap-29 lg:gap-20 border-b border-gray-500 pb-1'>
            <h4>{getDayName(2)}</h4>
            <div className='flex gap-25 sm:gap-30 lg:gap-15 items-center'>
              <img className='w-12  sm:w-25 lg:w-13' src={forecast[16] ? getIcon(forecast[16].weather[0].main) : umb} alt="icon" />
              <h4>{forecast[16] ? forecast[16].weather[0].main : "sunny"}</h4>
            </div>
            <p><span className='text-white '>{forecast[16] ? Math.round(forecast[16].main.temp_max) : "28"}</span>/{forecast[16] ? Math.round(forecast[16].main.temp_min) : "17"}</p>
          </div>

          <div className='flex justify-bettwen items-center h-[34%] gap-10 sm:gap-27 lg:gap-18 border-b border-gray-500 pb-1'>
            <h4>{getDayName(3)}</h4>
            <div className='flex gap-25 sm:gap-30 lg:gap-15 items-center'>
              <img className='w-12 sm:w-25 lg:w-13 ' src={forecast[24] ? getIcon(forecast[24].weather[0].main) : umbr} alt="icon" />
              <h4>{forecast[24] ? forecast[24].weather[0].main : "sunny"}</h4>
            </div>
            <p className='pl-3'><span className='text-white '>{forecast[24] ? Math.round(forecast[24].main.temp_max) : "21"}</span>/{forecast[24] ? Math.round(forecast[24].main.temp_min) : "15"}</p>
          </div>

          <div className='flex justify-bettwen items-center h-[34%] gap-13 sm:gap-30 lg:gap-20 border-b border-gray-500 pb-1'>
            <h4>{getDayName(4)}</h4>
            <div className='flex gap-25 sm:gap-33 lg:gap-15 items-center'>
              <img className='w-10 sm:w-20 lg:w-13 my-2' src={forecast[32] ? getIcon(forecast[32].weather[0].main) : umbr} alt="icon" />
              <h4>{forecast[32] ? forecast[32].weather[0].main : "sunny"}</h4>
            </div>
            <p className='pl-1'><span className='text-white '>{forecast[32] ? Math.round(forecast[32].main.temp_max) : "26"}</span>/{forecast[32] ? Math.round(forecast[32].main.temp_min) : "16"}</p>
          </div>

          <div className='flex justify-bettwen items-center h-[34%] gap-10.5 sm:gap-28 lg:gap-18 border-b border-gray-500 pb-1'>
            <h4>{getDayName(5)}</h4>
            <div className='flex gap-25 sm:gap-33 lg:gap-15 items-center'>
              <img className='w-10 sm:w-20 lg:w-13' src={umb} alt="icon" />
              <h4 className='font-bold'>sunny</h4>
            </div>
            <p><span className='text-white'>39</span>/19</p>
          </div>

          <div className='flex justify-bettwen items-center h-[34%] gap-10 sm:gap-27 lg:gap-20   pb-2'>
            <h4>{getDayName(6)}</h4>
            <div className='flex gap-25 sm:gap-29 lg:gap-14 items-center'>
              <img className='w-12 sm:w-25 lg:w-14 mt-[6px]' src={umbrr} alt="icon" />
              <h4 className='font-bold'>sunny</h4>
            </div>
            <p className='pl-2'><span className='text-white'>38</span>/21</p>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Home

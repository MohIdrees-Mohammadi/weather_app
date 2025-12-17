import axios from 'axios';
import React, { useEffect, useState } from 'react';
import rani from '../assets/rani.png'; // یا هر آیکون وضعیت آب و هوا

const CityCard = ({ city, latitude, longitude, icon }) => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      setWeather(res.data.current_weather);
      console.log(res.data.current_weather);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (!weather) return <div>Loading...</div>;

  return (
    <div className="flex flex-row justify-center items-center bg-secondary rounded-3xl relative gap-30 h-25 w-110 py-5 px-2 md:gap-30 md:h-25 md:w-80 md:py-5 md:px-2 xl:gap-30 xl:h-25 xl:w-120 xl:py-5 xl:px-2">
      
      {/* آیکون */}
      <img 
        className="absolute w-[70px] left-5 md:w-[70px] md:left-5 xl:w-[70px] xl:left-5"
        src={icon} 
        alt={city + ' weather'} 
      />
      
      {/* نام شهر و ساعت */}
      <div className="flex flex-col absolute gap-2 left-30 md:gap-2 md:left-30 xl:gap-2 xl:left-30">
        <span className="font-extrabold text-2xl md:text-2xl xl:text-2xl">{city}</span>
        <span className="text-gray-400">{new Date().toLocaleTimeString()}</span>
      </div>
      
      {/* دما */}
      <span className="font-semibold absolute text-3xl right-10 md:text-3xl md:right-6 xl:text-3xl xl:right-10">
        {weather.temperature}°
      </span>
    </div>
  );
};

export default CityCard;
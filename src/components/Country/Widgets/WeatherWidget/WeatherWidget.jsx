import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherWidget.scss';

const WeatherWidget = ({ city }) => {
  const [weatherData, setWeather] = useState({});

  useEffect(() => {
    let isCancelled = false;
    const getWeather = async () => {
      try {
        const result = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=1964d0a7118d50f00dc12a34ffef2fef&units=metric`
        );
        if (!isCancelled) setWeather(result.data);
      } catch (e) {
        if (!isCancelled) {
          console.log(e.message);
        }
      }
    };
    getWeather();
    return () => (isCancelled = true);
  }, [city]);

  return (
    <>
      {Object.keys(weatherData).length && (
        <div className='weatherWidget'>
          <h4>Weather in {city}</h4>
          <img
            className='weather-icon'
            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt='weather-img'
          />
          <div className='temperature'>
            {weatherData.main.temp.toFixed(0)}°C
          </div>
          <div className='humidity'>
            humidity: {weatherData.main.humidity} %
          </div>
          <div className='wind'>wind: {weatherData.wind.speed} m/s</div>
          <div className='weather-description'>
            {weatherData.weather[0].description}
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherWidget;

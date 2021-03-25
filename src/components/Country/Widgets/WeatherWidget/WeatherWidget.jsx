import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import translate from '../../../../translate';
import './WeatherWidget.scss';
import Spinner from '../../../Spinner/Spinner';

const WeatherWidget = ({ cityObj }) => {
  const code = useSelector((state) => state.code);
  const [weatherData, setWeather] = useState({});

  useEffect(() => {
    let isCancelled = false;
    const getWeather = async () => {
      try {
        const result = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityObj.en}&lang=${code}&appid=1964d0a7118d50f00dc12a34ffef2fef&units=metric`
        );
        if (!isCancelled) {
          let timer = setTimeout(() => {
            setWeather(result.data);
            clearTimeout(timer);
          }, 500);
        }
      } catch (e) {
        if (!isCancelled) {
          console.log(e.message);
        }
      }
    };
    getWeather();
    return () => (isCancelled = true);
  }, [cityObj, code]);

  return (
    <>
      {weatherData.weather === undefined ? (
        <Spinner />
      ) : (
        <div className='weatherWidget'>
          <h4>
            {translate.headingWeatherWidget[code]} {cityObj[code]}
          </h4>
          <img
            className='weather-icon'
            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt='weather-img'
            title={`${weatherData.weather[0].description}`}
          />
          <div className='temperature'>
            {weatherData.main.temp.toFixed(0)}°C
          </div>
          <div className='humidity'>
            {translate.weatherInfo.humidity[code]}: {weatherData.main.humidity}%
          </div>
          <div className='wind'>
            {translate.weatherInfo.wind[code]}: {weatherData.wind.speed}
            {translate.weatherInfo.units[code]}
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherWidget;

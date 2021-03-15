import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TimeWidget = ({ city, lat, lon }) => {
  const [time, setTime] = useState('');

  const formattedTime = (timestamp) => {
    // const date = new Date(timestamp * 1000);
    // const hours = date.getHours();
    // const minutes = '0' + date.getMinutes();
    // const seconds = '0' + date.getSeconds();
    // return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return timestamp.substr(11);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const getTime = async () => {
        const result = await axios.get(
          `http://api.timezonedb.com/v2.1/get-time-zone?key=8XYGJFY85NDT&format=json&by=position&lat=${lat}&lng=${lon}`
        );
        setTime(formattedTime(result.data.formatted));
      };
      getTime();
    }, 1000);
    return () => clearInterval(interval);
  }, [city, lat, lon]);

  return (
    <div className='timeWidget'>
      <h4>Local time in {city}</h4>
      <div>{time}</div>
    </div>
  );
};

export default TimeWidget;

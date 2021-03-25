import React, { useEffect, useState } from 'react';

const TimeWidget = ({ city, timezone }) => {
  const [time, setTime] = useState('');
  const [fullDate, setFullDate] = useState('');

  const utc = Number(timezone[0].substring(3, 6));

  const getTime = (utc) => {
    const differenceTime = new Date().getTimezoneOffset() / 60 + utc;
    const date = new Date();
    date.setHours(date.getHours() + differenceTime);
    return date;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const formattedTime = String(getTime(utc)).substring(16, 24);
      setTime(formattedTime);
    }, 1000);
    return () => clearInterval(interval);
  }, [utc]);

  useEffect(() => {
    const dateOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const dateFormatter = new Intl.DateTimeFormat('en-US', dateOptions);
    const date = dateFormatter.format(getTime(utc));
    setFullDate(date);
  }, [utc]);

  return (
    <div className='timeWidget'>
      <h4>Local time in {city}</h4>
      <div>{time}</div>
      <div>{fullDate}</div>
    </div>
  );
};

export default TimeWidget;

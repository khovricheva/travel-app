import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import translate from '../../../../translate';

const TimeWidget = ({ city, timezone }) => {
  const code = useSelector((state) => state.code);
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
    const date = getTime(utc).toLocaleString(code === 'ua' ? 'uk' : code, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    setFullDate(date);
  }, [utc, code]);

  return (
    <div className='timeWidget'>
      <h4>
        {translate.headingTimeWidget[code]} {city}
      </h4>
      <div>{time}</div>
      <div>{fullDate}</div>
    </div>
  );
};

export default TimeWidget;

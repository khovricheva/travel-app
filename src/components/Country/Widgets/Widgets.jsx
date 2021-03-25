import React from 'react';
import WeatherWidget from './WeatherWidget/WeatherWidget';
import TimeWidget from './TimeWidget/TimeWidget';
import CurrencyWidget from './CurrencyWidget/CurrencyWidget';
import './Widgets.scss';

const Widgets = ({ cityObj, city, timezone, currencyCode, countryCode }) => {
  return (
    <div className='widgets'>
      <TimeWidget city={city} timezone={timezone} />
      <WeatherWidget cityObj={cityObj} />
      <CurrencyWidget currencyCode={currencyCode} countryCode={countryCode} />
    </div>
  );
};

export default Widgets;

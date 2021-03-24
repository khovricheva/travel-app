import React from 'react';
import WeatherWidget from './WeatherWidget/WeatherWidget';
import TimeWidget from './TimeWidget/TimeWidget';
import CurrencyWidget from './CurrencyWidget/CurrencyWidget';
import './Widgets.scss';

const Widgets = (props) => {
  return (
    <div className='widgets'>
      {/* <TimeWidget city={props.city} lat={props.lat} lon={props.lon} /> */}
      <WeatherWidget city={props.city} />
      <CurrencyWidget
        currencyCode={props.currencyCode}
        countryCode={props.countryCode}
      />
    </div>
  );
};

export default Widgets;

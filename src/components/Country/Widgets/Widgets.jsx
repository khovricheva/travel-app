import React from 'react';
import WeatherWidget from './WeatherWidget/WeatherWidget';
import TimeWidget from './TimeWidget/TimeWidget';
import CurrencyWidget from './CurrencyWidget/CurrencyWidget';
import './Widgets.scss';

const Widgets = (props) => {
  return (
    <div className='widgets'>
      <WeatherWidget city={props.city} />
      <TimeWidget city={props.city} />
      <CurrencyWidget currency={props.currency} />
    </div>
  );
};

export default Widgets;

import React from 'react';
import WeatherWidget from './WeatherWidget';
import TimeWidget from './TimeWidget';
import CurrencyWidget from './CurrencyWidget';

const Widgets = (props) => {
  return (
    <div>
      <WeatherWidget city={props.city} />
      <TimeWidget city={props.city} />
      <CurrencyWidget currency={props.currency} />
    </div>
  );
};

export default Widgets;

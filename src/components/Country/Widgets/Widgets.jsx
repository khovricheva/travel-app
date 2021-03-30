import React from 'react';
import ErrorFallback from '../../ErrorBoundary/ErrorBoundary';
import { ErrorBoundary } from 'react-error-boundary';
import WeatherWidget from './WeatherWidget/WeatherWidget';
import TimeWidget from './TimeWidget/TimeWidget';
import CurrencyWidget from './CurrencyWidget/CurrencyWidget';
import './Widgets.scss';

const Widgets = ({ cityObj, city, timezone, currencyCode, countryCode }) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload();
        localStorage.clear();
      }}
    >
      <div className='widgets'>
        <TimeWidget city={city} timezone={timezone} />
        <WeatherWidget cityObj={cityObj} />
        <CurrencyWidget currencyCode={currencyCode} countryCode={countryCode} />
      </div>
    </ErrorBoundary>
  );
};

export default Widgets;

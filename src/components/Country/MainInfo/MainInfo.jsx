import React from 'react';
import { useSelector } from 'react-redux';
import ErrorFallback from '../../ErrorBoundary/ErrorBoundary';
import { ErrorBoundary } from 'react-error-boundary';
import translate from '../../../translate';
import './MainInfo.scss';

function MainInfo({ countryName, capital, info, population, currencies }) {
  const code = useSelector((state) => state.code);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload();
        localStorage.clear();
      }}
    >
      <div className='countryInfo'>
        <h2 className='countryName'>{countryName}</h2>
        <div>
          <h3 className='countryHeading'>{translate.capital[code]}</h3>
          <p className='infoContent'>{capital}</p>
        </div>
        <div>
          <h3 className='countryHeading'>{translate.info[code]}</h3>
          <p className='infoContent'>{info}</p>
        </div>
        <div>
          <h3 className='countryHeading'>{translate.population[code]}</h3>
          <p className='infoContent'>
            {population} {translate.populationUnits[code]}
          </p>
        </div>
        <div>
          <h3 className='countryHeading'>{translate.currency[code]}</h3>
          <p className='infoContent'>
            {currencies.name}, {currencies.symbol}
          </p>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default MainInfo;

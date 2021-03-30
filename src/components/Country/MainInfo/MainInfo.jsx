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
          <h3>{translate.capital[code]}</h3>
          {capital}
        </div>
        <div>
          <h3>{translate.info[code]}</h3>
          {info}
        </div>
        <div>
          <h3>{translate.population[code]}</h3>
          {population} {translate.populationUnits[code]}
        </div>
        <div>
          <h3>{translate.currency[code]}</h3>
          {currencies.name}, {currencies.symbol}
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default MainInfo;

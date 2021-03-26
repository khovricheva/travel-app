import React from 'react';
import { useSelector } from 'react-redux';
import translate from '../../../translate';
import './MainInfo.scss';

function MainInfo({ countryName, capital, info, population, currencies }) {
  const code = useSelector((state) => state.code);

  return (
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
  );
}

export default MainInfo;

import React from 'react';
import translate from '../../../translate';
import { useSelector } from 'react-redux';
import './MainInfo.scss';

function MainInfo({ introPhoto, name, capital, info, population, currencies }) {
  const code = useSelector((state) => state.code);

  return (
    <div className='countryInfo'>
      <img src={introPhoto} alt='countryImage' className='countryImage' />
      <h2 className='countryName'>{name[code]}</h2>
      <div>
        <h3>{translate.capital[code]}</h3>
        {capital[code]}
      </div>
      <div>
        <h3>{translate.info[code]}</h3>
        {info[code]}
      </div>
      <div>
        <h3>{translate.population[code]}</h3>
        {population} people
      </div>
      <div>
        <h3>{translate.currency[code]}</h3>
        {currencies.name}, {currencies.symbol}
      </div>
    </div>
  );
}

export default MainInfo;

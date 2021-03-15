import React, { useContext } from 'react';
import './Countries.scss';
import { CountryContext } from '../../context/GlobalContext';
import CountryCards from './CountryCards';

const Countries = () => {
  const countries = useContext(CountryContext);

  return (
    <div className="countries">
      <CountryCards countries={countries} />
    </div>
  );
};

export default Countries;

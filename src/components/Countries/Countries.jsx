import React, { useContext } from 'react';
import './Countries.scss';
import { CountryContext } from '../../context/GlobalContext';
import CountryCards from './CountryCards';

const Countries = () => {
  const countries = useContext(CountryContext);

  return <CountryCards countries={countries} />;
};

export default Countries;

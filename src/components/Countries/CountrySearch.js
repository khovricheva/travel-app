import React, { useContext } from 'react';
import { CountryContext } from '../../context/GlobalContext';
import { useLocation } from 'react-router-dom';
import CountryCards from './CountryCards';

const countryFilter = (countries, name) => {
 const result = countries.filter(
    (item) =>
      item.name.en.toLowerCase().includes(name) ||
      item.capital.en.toLowerCase().includes(name) ||
      item.name.ru.toLowerCase().includes(name) ||
      item.capital.ru.toLowerCase().includes(name) ||
      item.name.ua.toLowerCase().includes(name) ||
      item.capital.ua.toLowerCase().includes(name)
  );
  return result.length === 0 ? 'NotFound' : result;
};

const CountrySearch = () => {
  const countries = useContext(CountryContext);
  const location = useLocation();

  const name = location.pathname.slice(13).toLowerCase();
  const countryResult = countryFilter(countries, name);

  return <CountryCards countries={countryResult} />;
};

export default CountrySearch;

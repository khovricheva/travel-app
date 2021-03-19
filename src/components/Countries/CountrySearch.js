import React, { useContext, useEffect } from 'react';
import { CountryContext } from '../../context/GlobalContext';
import { useLocation } from 'react-router-dom';
import CountryCards from './CountryCards';
import { useSelector } from 'react-redux';

const countryFilter = (lang, countries, name) => {
  if (lang === 'English')
    return countries.filter(
      (item) =>
        item.name.en.toLowerCase().includes(name) ||
        item.capital.en.toLowerCase().includes(name)
    );
  if (lang === 'Russian')
    return countries.filter(
      (item) =>
        item.name.ru.toLowerCase().includes(name) ||
        item.capital.ru.toLowerCase().includes(name)
    );
  if (lang === 'Ukrainian')
    return countries.filter(
      (item) =>
        item.name.ua.toLowerCase().includes(name) ||
        item.capital.ua.toLowerCase().includes(name)
    );
  // return countries.filter(
  //   (item) =>
  //     item.name.en.toLowerCase().includes(name) ||
  //     item.capital.en.toLowerCase().includes(name) ||
  //     item.name.ru.toLowerCase().includes(name) ||
  //     item.capital.ru.toLowerCase().includes(name) ||
  //     item.name.ua.toLowerCase().includes(name) ||
  //     item.capital.ua.toLowerCase().includes(name)
  // );
};

const CountrySearch = () => {
  const countries = useContext(CountryContext);
  const location = useLocation();
  const langauge = useSelector((state) => state.lang.lang);
  
  const name = location.pathname.slice(13).toLowerCase();
  const countryResult = countryFilter(langauge, countries, name);

  return (
    <div className="countries">
      <CountryCards countries={countryResult} />
    </div>
  );
};

export default CountrySearch;

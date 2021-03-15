import React, { useContext, useEffect } from 'react';
import { CountryContext } from '../../context/GlobalContext';
import { useLocation } from 'react-router-dom';
import CountryCards from './CountryCards';

const CountrySearch = () => {
  const countries = useContext(CountryContext);
  const location = useLocation();


  const name = location.pathname.slice(13).toLowerCase();

  const countryFilter = countries.filter(
    (item) =>
      item.nameEn.toLowerCase().includes(name) ||
      item.capitalEn.toLowerCase().includes(name)
  );


  return (
    <div className="countries">
      <CountryCards countries={countryFilter} />
    </div>
  );
};

export default CountrySearch;

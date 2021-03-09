import React, { useEffect, useState } from 'react';
import './Countries.scss';
// import countriesData from '../../data/countriesData.json';
import axios from 'axios';

import { Link } from 'react-router-dom';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    let isCancelled = false;
    const getData = async () => {
      try {
        const result = await axios.get(
          `https://artemsirobaba.github.io/countries/all.json`
        );
        if (!isCancelled) setCountries(result.data);
      } catch (e) {
        if (!isCancelled) {
          console.log(e.message);
        }
      }
    };
    getData();
    return () => (isCancelled = true);
  }, []);

  return (
    <div className='countries'>
      {countries.map((item) => (
        <Link key={item.id} to={`/${item.countryName.toLowerCase()}`}>
          <div className='country'>
            <img
              src={process.env.PUBLIC_URL + item.img}
              className='countryImage'
              alt='countries'
            />
            <h1>{item.countryName}</h1>
            <h3>{item.capitalName}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Countries;

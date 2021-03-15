import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Country.scss';
import Widgets from './Widgets/Widgets';

const Country = (props) => {
  const { slug } = props.match.params;

  const [country, setCountry] = useState({});

  useEffect(() => {
    let isCancelled = false;
    const getData = async () => {
      try {
        const result = await axios.get(
          `https://travel-api-git-main-imbatman.vercel.app/countryInfo/${slug}.json`
        );
        if (!isCancelled) setCountry(result.data);
      } catch (e) {
        if (!isCancelled) {
          console.log(e.message);
          setCountry('Error');
        }
      }
    };
    getData();
    return () => (isCancelled = true);
  }, [slug]);

  if (country === 'Error') {
    return <div>Sorry, something went wrong </div>;
  }

  return (
    <>
      {Object.keys(country).length !== 0 && (
        <div className='country'>
          {/* <img src={country.img} alt='country' className='countryImage' /> */}
          <h2 className='countryName'>{country.name.en}</h2>
          <div>
            <h3>Capital</h3>
            {country.capital.en}
          </div>
          <div>
            <h3>Info</h3>
            {country.info.en}
          </div>
          <div>
            <h3>Population</h3>
            {country.population} people
          </div>
          <div>
            <h3>Currency</h3>
            {country.currencies.name}, {country.currencies.symbol}
          </div>
          <Widgets
            city={country.capital.en}
            currencyCode={country.currencies.code}
            countryCode={country.alpha2Code}
            lat={country.coordinates.lat}
            lon={country.coordinates.lon}
          />
        </div>
      )}
    </>
  );
};

export default Country;

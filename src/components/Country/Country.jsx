import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Country.scss';
import Widgets from './Widgets/Widgets';
import CountryMap from './CountryMap/CountryMap';
import translate from '../../translate';
import { useSelector } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import Attractions from './Attractions/Attractions';

const Country = (props) => {
  const { slug } = props.match.params;
  const [country, setCountry] = useState([]);
  const code = useSelector((state) => state.code);

  useEffect(() => {
    let isCancelled = false;
    const getData = async () => {
      try {
        const result = await axios.get(
          `https://travel-api-git-main-imbatman.vercel.app/countryInfo/${slug}.json`
        );
        if (!isCancelled) {
          let timer = setTimeout(() => {
            setCountry(result.data);
            clearTimeout(timer);
          }, 500);
        }
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
  if (country.length === 0) {
    return <Spinner />;
  }

  return (
    <>
      {Object.keys(country).length !== 0 && (
        <div className='country'>
          <img
            src={country.introPhoto}
            alt='countryImage'
            className='countryImage'
          />
          <h2 className='countryName'>{country.name[code]}</h2>
          <div>
            <h3>{translate.capital[code]}</h3>
            {country.capital[code]}
          </div>
          <div>
            <h3>{translate.info[code]}</h3>
            {country.info[code]}
          </div>
          <div>
            <h3>{translate.population[code]}</h3>
            {country.population} people
          </div>
          <div>
            <h3>{translate.currency[code]}</h3>
            {country.currencies.name}, {country.currencies.symbol}
          </div>
          <CountryMap
            lat={country.coordinates.lat}
            lon={country.coordinates.lon}
            capital={country.capital.en}
            geoCoordinates={country.geoCoordinates}
          />
          <Attractions
            city={country.capital.en}
            lat={country.coordinates.lat}
            lon={country.coordinates.lon}
          />
          <Widgets
            city={country.capital.en}
            currencyCode={country.currencies.code}
            countryCode={country.alpha2Code}
            timezone={country.timezones}
          />
        </div>
      )}
    </>
  );
};

export default Country;

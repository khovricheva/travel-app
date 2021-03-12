import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Country.scss';
import Widgets from './Widgets/Widgets';
// import countriesData from '../../data/countriesData.json';

const Country = (props) => {
  const { slug } = props.match.params;

  const [country, setCountry] = useState({});

  useEffect(() => {
    let isCancelled = false;
    const getData = async () => {
      try {
        const result = await axios.get(
          `https://artemsirobaba.github.io/countries/${slug}.json`
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
    <div className='country'>
      <img src={country.img} alt='country' className='countryImage' />
      <h2 className='countryName'>{country.countryName}</h2>
      <div>
        <h3>Capital</h3>
        {country.capitalName}
      </div>
      <div>
        <h3>Geography</h3>
        {country.geography}
      </div>
      <div>
        <h3>Government</h3>
        {country.government}
      </div>
      <div>
        <h3>Weather</h3>
        {country.weather}
      </div>
      <div>
        <h3>Language</h3>
        {country.language}
      </div>
      <div>
        <h3>Religion</h3>
        {country.religion}
      </div>
      <div>
        <h3>Currency</h3>
        {country.currency}
      </div>
      <Widgets city={country.capitalName} currency={country.currency} />
    </div>
  );
};

export default Country;

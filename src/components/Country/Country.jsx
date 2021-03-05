import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Country.scss';
// import countriesData from '../../data/countriesData.json';

const Country = (props) => {
  const { slug } = props.match.params;

  const [country, setCountry] = useState({});

  useEffect(() => {
    // countriesData.map((country, index) =>
    //   slug === country.slug ? setCountry(countriesData[index]) : null
    // );
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
        }
      }
    };
    getData();
    return () => (isCancelled = true);
  }, [slug]);

  return (
    <div className="country">
      <img src={country.img} alt="country" className="countryImage" />
      <h2 className="countryName">{country.countryName}</h2>
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
    </div>
  );
};

export default Country;

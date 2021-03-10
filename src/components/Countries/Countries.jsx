import React from 'react';
import './Countries.scss';
import countriesData from '../../data/countriesData.json';

import { Link } from 'react-router-dom';

const Countries = () => {
  return (
    <div className="countries">
      {countriesData.map((item) => (
        <div
          className="country"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + item.img})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Link key={item.id} to={`/${item.countryName.toLowerCase()}`}>
            <h1 className="countryName">{item.countryName}</h1>
            <h3 className="countryCapital">{item.capitalName}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Countries;

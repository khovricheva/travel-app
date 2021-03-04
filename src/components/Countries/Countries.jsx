import React from 'react';
import './Countries.scss';
import images from './images';
import { Link } from 'react-router-dom';

const Countries = () => {
  return (
    <div className="countries">
      {images.map((item) => (
        <Link key={item.countryName} to={`/${item.countryName.toLowerCase()}`}>
          <div className="everyCountry">
            <img
              src={process.env.PUBLIC_URL + item.img}
              className="countryImage"
              alt="countries"
            />
            <h1>{item.countryName}</h1>
            <h3>{item.capital}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Countries;

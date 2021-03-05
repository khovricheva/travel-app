import React from 'react';
import './Countries.scss';
// import images from './images';
import countriesData from '../../data/countriesData.json';

import { Link } from 'react-router-dom';

const Countries = () => {
  return (
    <div className='countries'>
      {countriesData.map((item) => (
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

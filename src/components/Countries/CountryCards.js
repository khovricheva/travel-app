import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import { useSelector } from 'react-redux';

const CountryCards = (props) => {
  const { countries } = props;

  const langauge = useSelector((state) => state.lang.lang);

  if (countries.length === 0) {
    return <NotFound />;
  }

  return (
    <>
      {countries.map((item) => (
        <Link key={item.name.en} to={`/country/${item.name.en.toLowerCase()}`}>
          <div className="country">
            <img
              loading="lazy"
              src={item.introPhoto}
              className="countryImage"
              alt="countries"
            />
            {langauge === 'English' ? (
              <>
                <h1>{item.name.en}</h1>
                <h3>{item.capital.en}</h3>
              </>
            ) : langauge === 'Russian' ? (
              <>
                <h1>{item.name.ru}</h1>
                <h3>{item.capital.ru} </h3>
              </>
            ) : (
              <>
                <h1>{item.name.ua}</h1>
                <h3>{item.capital.ua} </h3>
              </>
            )}
          </div>
        </Link>
      ))}
    </>
  );
};

export default CountryCards;

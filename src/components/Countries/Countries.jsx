import React, { useEffect, useState } from 'react';
import './Countries.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

const Countries = (props) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    let isCancelled = false;
    const getData = async () => {
      try {
        const result = await axios.get(
          `https://artemsirobaba.github.io/countries/all.json`
        );
        if (!isCancelled) {
          setCountries(result.data);
        }
      } catch (e) {
        if (!isCancelled) {
          console.log(e.message);
        }
      }
    };
    getData();

    return () => (isCancelled = true);
  }, []);

  const newState = countries.filter(
    (item) => item.countryName === props.countries.countries
  );
  console.log(props.countries.countries);

  return (
    <div className='countries'>
      {newState.map((item, index) => (
        <Link key={index} to={`/${item.countryName.toLowerCase()}`}>
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

// export default Countries;
function mapStateToProps(state) {
  return {
    countries: state.countries,
  };
}

export default connect(mapStateToProps)(Countries);

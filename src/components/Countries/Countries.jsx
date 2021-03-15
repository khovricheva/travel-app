import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Countries.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Countries = (props) => {

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    let isCancelled = false;
    const getData = async () => {
      try {
        const result = await axios.get(
          `https://travel-api-git-main-imbatman.vercel.app/all.json`
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

  // const newState = countries.filter(
  //   (item) =>
  //     item.nameEn
  //       .toLowerCase()
  //       .includes(props.searchQuery.searchQuery.toLowerCase()) ||
  //     item.capitalEn
  //       .toLowerCase()
  //       .includes(props.searchQuery.searchQuery.toLowerCase())
  // );

  // console.log(newState);

  // if (newState.length === 0) {
  //   return <div> we didn't have this country yet, sorry</div>;
  // }

  return (
    <div className="countries">
      {countries.map((item, index) => (
        <Link key={index} to={`/${item.nameEn.toLowerCase()}`}>
          <div className="country">
            <img
              loading="lazy"
              src={item.introPhoto}
              className="countryImage"
              alt="countries"
            />
            <h1>{item.nameEn}</h1>
            <h3>{item.capitalEn}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    searchQuery: state.searchQuery,
  };
}

export default connect(mapStateToProps)(Countries);

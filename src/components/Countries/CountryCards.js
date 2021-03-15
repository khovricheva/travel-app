import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const CountryCards = (props) => {
  const { countries } = props;

  if (countries.length === 0) {
    return <div>Sorry, nothing here</div>;
  }

  return (
    <>
      {countries.map((item) => (
        <Link key={item.capitalEn} to={`/country/${item.nameEn.toLowerCase()}`}>
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
    </>
  );
};

function mapStateToProps(state) {
  return {
    searchQuery: state.searchQuery,
  };
}

export default connect(mapStateToProps)(CountryCards);

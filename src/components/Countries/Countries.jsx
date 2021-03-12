import React, { useContext } from 'react';
import './Countries.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MyContextData } from '../../context';

const Countries = (props) => {
  const countries = useContext(MyContextData);

  const newState = countries.filter(
    (item) =>
      item.nameEn
        .toLowerCase()
        .includes(props.searchQuery.searchQuery.toLowerCase()) ||
      item.capitalEn
        .toLowerCase()
        .includes(props.searchQuery.searchQuery.toLowerCase())
  );

  if (newState.length === 0) {
    return <div> we didn't have this country yet, sorry</div>;
  }

  return (
    <div className='countries'>
      {newState.map((item, index) => (
        <Link key={index} to={`/${item.nameEn.toLowerCase()}`}>
          <div className='country'>
            <img
              src={item.introPhoto}
              loading='lazy'
              className='countryImage'
              alt='countries'
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

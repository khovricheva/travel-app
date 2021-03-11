import React, { useContext } from 'react';
import './Countries.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MyContextData } from '../../context';

const Countries = (props) => {

  const countries = useContext(MyContextData);

  // useEffect(() => {
  //   let isCancelled = false;
  //   const getData = async () => {
  //     try {
  //       const result = await axios.get(
  //         `https://artemsirobaba.github.io/countries/all.json`
  //       );
  //       if (!isCancelled) {
  //         setCountries(result.data);
  //       }
  //     } catch (e) {
  //       if (!isCancelled) {
  //         console.log(e.message);
  //       }
  //     }
  //   };
  //   getData();

  //   return () => (isCancelled = true);
  // }, []);

  const newState = countries.filter(
    (item) =>
      item.name
        .toLowerCase()
        .includes(props.searchQuery.searchQuery.toLowerCase()) ||
      item.capital
        .toLowerCase()
        .includes(props.searchQuery.searchQuery.toLowerCase())
  );

  if (newState.length === 0) {
    return <div> we didn't have this country yet, sorry</div>;
  }

  return (
    <div className="countries">
      {newState.map((item, index) => (
        <Link key={index} to={`/${item.name.toLowerCase()}`}>
          <div className="country">
            <img src={item.introPhoto} loading='lazy' className="countryImage" alt="countries" />
            <h1>{item.name}</h1>
            <h3>{item.capital}</h3>
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

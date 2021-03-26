import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ErrorFallback from '../ErrorBoundary/ErrorBoundary';
import { ErrorBoundary } from 'react-error-boundary';
import './Country.scss';
import Widgets from './Widgets/Widgets';
import CountryMap from './CountryMap/CountryMap';
import Spinner from '../Spinner/Spinner';
import Attractions from './Attractions/Attractions';
import MainInfo from './MainInfo/MainInfo';
import Wrong from '../Wrong/Wrong';
import Video from './Video/Video';

const Country = (props) => {
  const { slug } = props.match.params;
  const [country, setCountry] = useState([]);
  const code = useSelector((state) => state.code);

  useEffect(() => {
    let isCancelled = false;
    const getData = async () => {
      try {
        const result = await axios.get(
          `https://travel-api-git-main-imbatman.vercel.app/countryInfo/${slug}.json`
        );
        if (!isCancelled) {
          let timer = setTimeout(() => {
            setCountry(result.data);
            clearTimeout(timer);
          }, 500);
        }
      } catch (e) {
        if (!isCancelled) {
          console.log(e.message);
          setCountry('Error');
        }
      }
    };
    getData();
    return () => (isCancelled = true);
  }, [slug]);

  return (
    <>
      {country.length === 0 ? (
        <Spinner />
      ) : country === 'Error' ? (
        <Wrong />
      ) : (
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            window.location.reload();
            localStorage.clear();
          }}
        >
          <div className='country'>
            <MainInfo
              introPhoto={country.introPhoto}
              name={country.name}
              capital={country.capital}
              info={country.info}
              population={country.population}
              currencies={country.currencies}
            />
            <Video videoId={country.videoId} />
            <CountryMap
              lat={country.coordinates.lat}
              lon={country.coordinates.lon}
              capital={country.capital[code]}
              geoCoordinates={country.geoCoordinates}
            />
            <Attractions
              countryName={country.name[code]}
              attractions={country.attractions}
            />
            <Widgets
              cityObj={country.capital}
              city={country.capital[code]}
              currencyCode={country.currencies.code}
              countryCode={country.alpha2Code}
              timezone={country.timezones}
            />
          </div>
        </ErrorBoundary>
      )}
    </>
  );
};

export default Country;

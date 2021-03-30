import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ErrorFallback from '../ErrorBoundary/ErrorBoundary';
import { ErrorBoundary } from 'react-error-boundary';
import './Country.scss';
import Widgets from './Widgets/Widgets';
import CountryMap from './CountryMap';
import Spinner from '../Spinner/Spinner';
import Attractions from './Attractions/Attractions';
import MainInfo from './MainInfo/MainInfo';
import Wrong from '../Wrong/Wrong';
import Video from './Video/Video';
import Container from '@material-ui/core/Container';

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
          <img
            src={country.introPhoto}
            alt='countrImage'
            className='mainImage'
          />
          <Container maxWidth='md' className='country'>
            <Widgets
              cityObj={country.capital}
              city={country.capital[code]}
              currencyCode={country.currencies.code}
              countryCode={country.alpha2Code}
              timezone={country.timezones}
            />

            <MainInfo
              countryName={country.name[code]}
              capital={country.capital[code]}
              info={country.info[code]}
              population={country.population}
              currencies={country.currencies}
            />
            <CountryMap
              lat={country.coordinates.lat}
              lon={country.coordinates.lon}
              countryName={country.name[code]}
              capital={country.capital[code]}
              geoCoordinates={country.geoCoordinates}
            />
            <Video videoId={country.videoId} countryName={country.name[code]} />
            <Attractions attractions={country.attractions} />
          </Container>
        </ErrorBoundary>
      )}
    </>
  );
};

export default Country;

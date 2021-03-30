import React, { useContext } from 'react';
import './Countries.scss';
import { CountryContext } from '../../context/GlobalContext';
import CountryCards from './CountryCards';
import ErrorFallback from '../ErrorBoundary';
import { ErrorBoundary } from 'react-error-boundary';

const Countries = () => {
  const countries = useContext(CountryContext);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload();
        localStorage.clear();
      }}
    >
      <CountryCards countries={countries} />
    </ErrorBoundary>
  );
};

export default Countries;

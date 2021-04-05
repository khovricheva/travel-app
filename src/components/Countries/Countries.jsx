import React from 'react';
import './Countries.scss';
import CountryCards from './CountryCards';
import ErrorFallback from '../ErrorBoundary';
import { ErrorBoundary } from 'react-error-boundary';

const Countries = ({countries}) => {

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

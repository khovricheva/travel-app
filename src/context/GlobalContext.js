import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CountryContext = createContext(null);

export const GlobalCountryContext = (props) => {
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

  return (
    <CountryContext.Provider value={countries}>
      {props.children}
    </CountryContext.Provider>
  );
};

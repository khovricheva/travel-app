import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const MyContextData = createContext(null);

export const MyContext = (props) => {
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

  return (
    <MyContextData.Provider value={countries}>
      {props.children}
    </MyContextData.Provider>
  );
};

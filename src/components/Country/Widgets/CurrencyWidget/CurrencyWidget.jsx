import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import translate from '../../../../translate';
import './CurrencyWidget.scss';

const CurrencyWidget = ({ currencyCode, countryCode }) => {
  const code = useSelector((state) => state.code);
  const [currency, setCurrency] = useState();

  useEffect(() => {
    let isCancelled = false;
    const getData = async () => {
      try {
        const result = await axios.get(`https://api.ratesapi.io/api/latest`);
        if (!isCancelled) {
          let timer = setTimeout(() => {
            setCurrency(result.data.rates[currencyCode]);
            clearTimeout(timer);
          }, 500);
        }
      } catch (e) {
        if (!isCancelled) {
          console.log(e.message);
        }
      }
    };
    getData();
    return () => (isCancelled = true);
  }, [currency, currencyCode]);

  return (
    <div className="currencyWidget">
      <h4> {translate.headingCurrencyWidget[code]}</h4>
      <div>
        <div>
          <img src={`https://www.countryflags.io/EU/shiny/24.png`} alt="flag" />
          EUR 1 = {currency ? currency.toFixed(2) : 1} {currencyCode}
          <img
            src={`https://www.countryflags.io/${countryCode}/shiny/24.png`}
            alt="flag"
          />
        </div>
      </div>
    </div>
  );
};

export default CurrencyWidget;

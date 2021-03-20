import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CurrencyWidget.scss';

const CurrencyWidget = ({ currencyCode, countryCode }) => {
  const [currency, setCurrency] = useState(0);

  useEffect(() => {
    let isCancelled = false;
    const getData = async () => {
      try {
        const result = await axios.get(
          `https://api.exchangeratesapi.io/latest?base=EUR`
        );

        if (!isCancelled) setCurrency(result.data.rates[currencyCode]);
      } catch (e) {
        if (!isCancelled) {
          console.log(e.message);
        }
      }
    };
    getData();
    return () => (isCancelled = true);
  }, [currency, currencyCode]); // чтобы хук не ругался

  return (
    <div className='currencyWidget'>
      <h4>Exchange Rates</h4>
      <div>
        <div>
          <img src={`https://www.countryflags.io/EU/shiny/24.png`} alt='flag' />
          EUR 1 = {currency ? currency.toFixed(2) : 1} {currencyCode}
          <img
            src={`https://www.countryflags.io/${countryCode}/shiny/24.png`}
            alt='flag'
          />
        </div>
      </div>
    </div>
  );
};

export default CurrencyWidget;

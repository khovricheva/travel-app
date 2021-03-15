import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CurrencyWidget.scss';

const CurrencyWidget = (props) => {
  // EU: 'EU',

  const data = {
    Австрия: 'AT',
    Бельгия: 'BE',
    Болгария: 'BG',
    Венгрия: 'HU',
    Греция: 'GR',
    Германия: 'DE',
    Дания: 'DK',
    Италия: 'IT',
    Ирландия: 'IE',
    Испания: 'ES',
    Кипр: 'CY',
    Люксембург: 'LU',
    Латвия: 'LV',
    Литва: 'LT',
    Мальта: 'MT',
    Нидерланды: 'NL',
    Португалия: 'PT',
    Польша: 'PL',
    Румыния: 'RO',
    Словения: 'SI',
    Словакия: 'SK',
    Франция: 'FR',
    Финляндия: 'FI',
    Хорватия: 'HR',
    Чехия: 'CZ',
    Швеция: 'SE',
    Эстония: 'EE',
  };

  useEffect(() => {
    let isCancelled = false;
    const getData = async () => {
      try {
        const option = {
          api_key: 'EgDeDYrGawUXe8SDQCvYfk4dFGhgeK',
          from: 'USD',
          to: 'EUR',
        };
        const result = await axios.get(
          `https://www.amdoren.com/api/currency.php?api_key=${option.api_key}&from=${option.from}&to=${option.to}`
        );
        if (!isCancelled) console.log(result.data);
      } catch (e) {
        if (!isCancelled) {
          console.log(e.message);
        }
      }
    };
    getData();
    return () => (isCancelled = true);
  }, []);

  const keys = Object.values(data);
  console.log(keys);

  return (
    <div className='currencyWidget'>
      <h4>Exchange Rates</h4>
      <div>
        <span>UAH 1</span>
        <span>USD 0.03603</span>
      </div>
      <div>
        {keys.map((item, index) => (
          <div key={index}>
            <img src={`https://www.countryflags.io/${item}/shiny/24.png`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrencyWidget;

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NotFound = () => {
  const langauge = useSelector((state) => state.lang.lang);

  return (
    <div>
      {langauge === 'English' ? (
        <h1>Go home</h1>
      ) : langauge === 'Russian' ? (
        <h1>На главную страницу</h1>
      ) : (
        <h1>На головну сторінку</h1>
      )}
      <Link to="/">
        <input
          type="submit"
          value={
            langauge === 'English'
              ? 'Home'
              : langauge === 'Russian'
              ? 'Главная'
              : 'Головна'
          }
        />
      </Link>
    </div>
  );
};

export default NotFound;

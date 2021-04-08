import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import translate from '../../translate';
import '../NotFound/NotFound.scss'

const Wrong = () => {
  const code = useSelector((state) => state.code);

  return (
    <div className="notFound">
      <h1 className="notFoundText">{translate.wrong[code]}</h1>
      <Link to="/">
        <input
          className="notFoundBtn"
          type="submit"
          value={translate.wrong.button[code]}
        />
      </Link>
    </div>
  );
};

export default Wrong;

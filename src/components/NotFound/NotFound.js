import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import translate from '../../translate';

const NotFound = () => {
  const code = useSelector((state) => state.code);

  return (
    <div>
      <h1>{translate.notfound[code]}</h1>

      <Link to="/">
        <input type="submit" value={translate.notfound.button[code]} />
      </Link>
    </div>
  );
};

export default NotFound;

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import translate from '../../translate';
import './NotFound.scss'

const NotFound = () => {
  const code = useSelector((state) => state.code);

  return (
    <div className='notFound'>
      <h1 className='notFoundText'>{translate.notfound[code]}</h1>
      <Link to='/'>
        <input className='notFoundBtn' type='submit' value={translate.notfound.button[code]} />
      </Link>
    </div>
  );
};

export default NotFound;

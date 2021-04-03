import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import translate from '../../translate';

const Title = () => {
  const code = useSelector((state) => state.code);
  return (
    <div className='title'>
      <Link to='/'>
        <h1>{translate.title[code]}</h1>
      </Link>
    </div>
  );
};

export default Title;

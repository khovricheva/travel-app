import React from 'react';
import './Header.scss';
import Input from './Input';
import Language from './Language';
import Title from './Title';
import { useLocation } from 'react-router-dom';

const Header = () => {
  
  const location = useLocation();

  return (
    <header className="header">
      <Title />
      {location.pathname === '/' ? <Input /> : null}
      <Language />
    </header>
  );
};

export default Header;

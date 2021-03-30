import React from 'react';
import './Header.scss';
import Input from './Input';
import Language from './Language';
import Title from './Title';
import { useLocation } from 'react-router-dom';
import DarkMode from './DarkMode';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <Title />
        {!location.pathname.includes('country') ? <Input /> : null}
        <Language />
        <DarkMode />
    </header>
  );
};

export default Header;

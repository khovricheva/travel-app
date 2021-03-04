import React from 'react';
import './Header.scss';
import Input from './Input';
import Language from './Language';
// import { CssBaseline, AppBar, Toolbar, Typography } from '@material-ui/core';
// import PublicIcon from '@material-ui/icons/Public';

const Header = () => {
  return (
    <header className="header">
      <div className="title">
        <h1>Travel App</h1>
      </div>
      <Input />
      <Language />
    </header>
  );
};

export default Header;

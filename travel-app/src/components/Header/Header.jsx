import React from 'react';
import './Header.scss';
import { CssBaseline, AppBar, Toolbar, Typography } from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';

const Header = () => {
  return (
    <header>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PublicIcon />
          <Typography variant='h6' color='inherit' noWrap>
            Travel App
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;

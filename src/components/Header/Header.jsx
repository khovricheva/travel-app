import React from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { CssBaseline, AppBar, Toolbar, Typography } from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Header = (props) => {
  const handleLangauge = (event) => {
    props.dispatch({ type: event.target.value.toUpperCase() });
  };

  console.log(props.chosenLangauge.lang);

  return (
    <header>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PublicIcon />
          <Typography variant="h6" color="inherit" noWrap>
            Travel App
          </Typography>
        </Toolbar>
      </AppBar>
      <FormControl>
        <InputLabel>Langauge</InputLabel>
        <Select value={props.chosenLangauge.lang} onChange={handleLangauge}>
          <MenuItem value={'English'}>English</MenuItem>
          <MenuItem value={'Russian'}>Russian</MenuItem>
          <MenuItem value={'Ukrainian'}>Ukrainian</MenuItem>
        </Select>
      </FormControl>
    </header>
  );
};

function mapStateToProps(state) {
  return {
    chosenLangauge: state.lang,
  };
}

export default connect(mapStateToProps)(Header);

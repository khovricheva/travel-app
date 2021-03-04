import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const Input = () => {
  return (
    <Paper className="inputForm" noValidate autoComplete="off">
      <InputBase className="input" placeholder="Search Country" />
      <IconButton className="icon">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Input;

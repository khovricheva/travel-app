import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Input = (props) => {
  const history = useHistory();

  const handleChangeInput = (e) => {
    props.dispatch({ type: 'SEARCH_QUERY', value: e.target.value });
  };

  const handleEnter = (e) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      searchQuery();
    }
  };
  const clearInput = () => {
    props.dispatch({ type: 'SEARCH_QUERY', value: '' });
  };

  const searchQuery = () => {
    // works only for counrtyName
    const path = props.searchQuery.searchQuery.toLowerCase();
    history.push(`/${path}`);
  };

  return (
    <Paper className='inputForm' noValidate autoComplete='off'>
      <InputBase
        className='input'
        placeholder='Search Country'
        type='text'
        autoFocus={true}
        value={props.searchQuery.searchQuery}
        onChange={(e) => handleChangeInput(e)}
        onKeyDown={(e) => handleEnter(e)}
      />
      <IconButton className='icon' onClick={clearInput}>
        <ClearIcon />
      </IconButton>
      <IconButton className='icon' onClick={searchQuery}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

function mapStateToProps(state) {
  return {
    searchQuery: state.searchQuery,
  };
}

export default connect(mapStateToProps)(Input);

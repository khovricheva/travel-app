import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { connect } from 'react-redux';

const Input = (props) => {
  console.log(props);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    props.dispatch({ type: 'GET_COUNTRIES', value: e.target.value });
  };

  const handleEnter = (e) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      console.log('Enter key was pressed');
      console.log(inputValue);
    }
  };

  const searchQuery = (e) => {
    console.log(inputValue);
  };

  return (
    <Paper className='inputForm' noValidate autoComplete='off'>
      <InputBase
        className='input'
        placeholder='Search Country'
        type='text'
        // autoFocus={true}
        ref={inputRef}
        value={props.countries.countries}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleEnter(e)}
      />
      <IconButton className='icon' onClick={() => setInputValue('')}>
        <ClearIcon />
      </IconButton>

      <IconButton className='icon' onClick={(e) => searchQuery(e)}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

function mapStateToProps(state) {
  return {
    countries: state.countries,
  };
}

export default connect(mapStateToProps)(Input);

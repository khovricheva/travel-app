import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';

const Language = (props) => {
  
  const handleLanguage = (event) => {
    props.dispatch({ type: event.target.value.toUpperCase() });
  };

  return (
    <FormControl variant="outlined" className='selectForm'>
      <Select value={props.chosenLanguage.lang} onChange={handleLanguage}>
        <MenuItem value={'English'}>English</MenuItem>
        <MenuItem value={'Russian'}>Russian</MenuItem>
        <MenuItem value={'Ukrainian'}>Ukrainian</MenuItem>
      </Select>
    </FormControl>

  );
};

function mapStateToProps(state) {
  return {
    chosenLanguage: state.lang,
  };
}

export default connect(mapStateToProps)(Language);

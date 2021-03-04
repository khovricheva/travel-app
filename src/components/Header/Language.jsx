import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';

const Language = (props) => {
  const handleLangauge = (event) => {
    props.dispatch({ type: event.target.value.toUpperCase() });
  };

  return (
    <FormControl>
      <InputLabel>Langauge</InputLabel>
      <Select value={props.chosenLangauge.lang} onChange={handleLangauge}>
        <MenuItem value={'English'}>English</MenuItem>
        <MenuItem value={'Russian'}>Russian</MenuItem>
        <MenuItem value={'Ukrainian'}>Ukrainian</MenuItem>
      </Select>
    </FormControl>
  );
};

function mapStateToProps(state) {
  return {
    chosenLangauge: state.lang,
  };
}

export default connect(mapStateToProps)(Language);

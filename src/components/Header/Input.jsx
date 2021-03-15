import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CountryContext } from '../../context/GlobalContext';

const Input = (props) => {
  const history = useHistory();

  const countries = useContext(CountryContext);

  const handleEnter = (e) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter' || e === 'start') {
      if (props.searchQuery.searchQuery.length !== 0) {
        history.push(`/search/text=${props.searchQuery.searchQuery}`);
        props.dispatch({ type: 'SEARCH_QUERY', value: '' });
      }
    }
  };

  const handleChangeInput = (e) => {
    props.dispatch({ type: 'SEARCH_QUERY', value: e.target.value });
  };

  const clearInput = () => {
    props.dispatch({ type: 'SEARCH_QUERY', value: '' });
  };

  return (
    <Paper className="inputForm" noValidate autoComplete="off">
      <InputBase
        className="input"
        placeholder="Search Country"
        type="text"
        autoFocus={true}
        value={props.searchQuery.searchQuery}
        onChange={(e) => handleChangeInput(e)}
        onKeyDown={(e) => handleEnter(e)}
      />
      <IconButton className="icon" onClick={clearInput}>
        <ClearIcon />
      </IconButton>
      <IconButton className="icon" onClick={() => handleEnter('start')}>
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

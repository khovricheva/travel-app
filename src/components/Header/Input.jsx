import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { MyContextData } from '../../context';

const Input = (props) => {

  const context = useContext(MyContextData);

  const history = useHistory();

  const newContext = context.filter(
    (item) =>
      item.name
        .toLowerCase()
        .includes(props.searchQuery.searchQuery.toLowerCase()) ||
      item.capital
        .toLowerCase()
        .includes(props.searchQuery.searchQuery.toLowerCase())
  );

  const handleEnter = (e) => {
    if (
      (e.code === 'Enter' && newContext.length === 1) ||
      (e.code === 'NumpadEnter' && newContext.length === 1)
    ) {
      searchQuery();
    }
  };

  const searchQuery = () => {
    history.push(`/${newContext[0].name.toLowerCase()}`);
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
      <IconButton
        className="icon"
        onClick={() => props.dispatch({ type: 'SEARCH_START' })}
      >
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

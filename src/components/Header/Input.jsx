import React, { useContext, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { useHistory } from 'react-router-dom';
import { CountryContext } from '../../context/GlobalContext';

const Input = () => {
  const [input, setInput] = useState('');

  const history = useHistory();

  const countries = useContext(CountryContext);

  const handleEnter = (e) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter' || e === 'start') {
      if (input.length !== 0) {
        history.push(`/search/text=${input}`);
        setInput('');
      }
    }
  };

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <Paper className="inputForm" noValidate autoComplete="off">
      <InputBase
        className="input"
        placeholder="Search Country"
        type="text"
        autoFocus={true}
        value={input}
        onChange={(e) => handleChangeInput(e)}
        onKeyDown={(e) => handleEnter(e)}
      />
      {input.length !== 0 ? (
        <IconButton className="icon" onClick={clearInput}>
          <ClearIcon />
        </IconButton>
      ) : null}

      <IconButton className="icon" onClick={() => handleEnter('start')}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Input;

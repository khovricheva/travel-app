import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import translate from '../../translate'


const Input = () => {
  const [input, setInput] = useState('');
  const code = useSelector((state) => state.code);
  const history = useHistory();

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
        placeholder={translate.input[code]}
        type="text"
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

import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import TranslateIcon from '@material-ui/icons/Translate';

const Language = () => {
  const dispatch = useDispatch();
  const langauge = useSelector((state) => state.langauge);

  const handleLanguage = (event) => {
    dispatch({ type: event.target.value.toUpperCase() });
  };

  const langaugeForm = (
    <FormControl variant="outlined" className="selectForm">
      <Select value={langauge} onChange={handleLanguage}>
        <MenuItem value={'English'}>English</MenuItem>
        <MenuItem value={'Russian'}>Russian</MenuItem>
        <MenuItem value={'Ukrainian'}>Ukrainian</MenuItem>
      </Select>
    </FormControl>
  );

  return (
    <>
      {langaugeForm}
      <Modal text='Change Langauge' icon={<TranslateIcon />}>{langaugeForm}</Modal>
    </>
  );
};

export default Language;

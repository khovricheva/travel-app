import { createStore, combineReducers } from 'redux';
import { langReducer, countriesReducer } from './reducer.js';

const allReducers = combineReducers({
  lang: langReducer,
  countries: countriesReducer,
});

export default createStore(allReducers);

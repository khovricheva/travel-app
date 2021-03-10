import { createStore, combineReducers } from 'redux';
import { langReducer, searchQueryReducer } from './reducer.js';

const allReducers = combineReducers({
  lang: langReducer,
  searchQuery: searchQueryReducer,
});

export default createStore(allReducers);

import { createStore } from 'redux';
import { langReducer } from './reducer.js';

export default createStore(langReducer);

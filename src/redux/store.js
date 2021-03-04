import { createStore, combineReducers } from "redux";
import { langReducer } from "./reducer.js";

const allReducers = combineReducers({
  lang: langReducer,
});

export default createStore(allReducers);

import { createStore, combineReducers } from "redux";
import { noteReducer } from "../reducers/noteReducer";

const rootReducer = combineReducers({ noteReducer });

const store = createStore(rootReducer);

export default store;
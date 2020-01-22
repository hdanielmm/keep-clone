import { createStore, combineReducers } from "redux";
import { noteReducer } from "../reducers/noteReducer";

const saveToLocalStorage = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.state = serializedState;
  } catch (error) {
    console.log(error);
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("state");
    return serializedState !== null ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

const rootReducer = combineReducers({ noteReducer });

const persistedState = loadFromLocalStorage();

const store = createStore(
  rootReducer, 
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
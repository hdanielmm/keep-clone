import { ADD_NOTE, DELETE_NOTE } from "../actions/actionCreators";

const initialState = [];

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];
    case DELETE_NOTE:
      return state.filter((note, index) => {
        console.log('note', note);
        return index !== action.payload
      });
    default:
      console.log("No action passed");
      break;
  }
  return state;
}

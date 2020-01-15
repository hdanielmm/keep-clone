import { ADD_NOTE } from "../actions/actionCreators";

const initialState = [{
  key: 1,
  title: "Redux note",
  content: "Note from redux"
}];

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];
    default:
      console.log("No action passed");
      break;
  }
  return state;
}

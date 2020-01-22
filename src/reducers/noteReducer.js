import { ADD_NOTE, DELETE_NOTE } from "../actions/actionCreators";

const initialState = {
  notes: []
};

export const noteReducer = (state = initialState, action) => {
  console.log('localStorage', localStorage.localNote);
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state, 
        notes: state.notes.concat(action.payload)
      };
    case DELETE_NOTE:
      let newNotes = state.notes.filter((note, index) => {
        console.log('note', note);
        return index !== action.payload
      });
      return {
        ...state,
        notes: newNotes
      }; 
    default:
      console.log("No action passed");
      break;
  }
  return state;
}

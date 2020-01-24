import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from "../actions/actionCreators";

const initialState = {
  notes: []
};

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: state.notes.concat(action.payload)
      };
    case DELETE_NOTE:
      const newNotes = state.notes.filter((note, index) => {
        return index !== action.payload
      });
      return {
        ...state,
        notes: newNotes
      };
    case UPDATE_NOTE:
      console.log("update", action.payload.title);
      // const a = state.notes.map((note, i) => console.log('note update', note, "i", action.payload.id))
      // break;
      const updatenote = state.notes.filter((note, index)=> {
        if (index === action.payload.id) {
         return note.title = action.payload.title;
        } else {
          return note;
        }
      });
      return {
        ...state,
        notes: updatenote
      }
    default:
      console.log("No action passed");
      break;
  }
  return state;
}

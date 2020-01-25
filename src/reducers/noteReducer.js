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
      console.log('action.payload', action.payload);
      const updatenote = state.notes.filter((note, index)=> {
        if (index === action.payload.id) {
         return (note.title = action.payload.title, note.content = action.payload.content);
        // return action.payload;
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

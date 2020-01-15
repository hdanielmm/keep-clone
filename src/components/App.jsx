import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { connect } from "react-redux";
import { addNote, deleteNote } from "../actions/actionCreators";

const App = ({ notes, addNote, deleteNote }) => {
  // const [notas, setNotes] = useState([]);

  // function deleteNote(id) {
  //   setNotes(notas.filter((note, index) => {
  //     return index !== id
  //   }));
  // }
  
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  notes: state.noteReducer
});

const mapDispatchToProps = (dispatch) => ({
  addNote: note => {
    dispatch(addNote(note));
  },
  deleteNote: id => {
    dispatch(deleteNote(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


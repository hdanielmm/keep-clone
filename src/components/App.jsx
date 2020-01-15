import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { connect } from "react-redux";
import { addNote } from "../actions/actionCreators";

const App = ({ notes, addNote }) => {
  const [notas, setNotes] = useState([]);

  // function addNote(newNote) {
  //   setNotes([...notes, newNote]);
  // }

  function deleteNote(id) {
    setNotes(notas.filter((note, index) => {
      return index !== id
    }));
  }
  
  console.log("estado en app", notes);

  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote}
      />
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

// recibe un estado y retorna un objeto
const mapStateToProps = state => ({
  notes: state.noteReducer
});

const mapDispatchToProps = (dispatch) => ({
  addNote: note => {
    dispatch(addNote(note));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


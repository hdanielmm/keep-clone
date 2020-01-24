import React from 'react';
import { connect } from 'react-redux';
import Note from "./Note";
import { deleteNote, updateNote } from '../actions/actionCreators';

const ShowNotes = ({ notes, deleteNote, updateNote }) => {
  return (
    <div>
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
          onUpdate={updateNote}
        />
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    notes: state.noteReducer.notes
  }
}

const mapDispatchToProps = dispatch => ({
  deleteNote: id => {
    dispatch(deleteNote(id));
  },
  updateNote: (note) => {
    dispatch(updateNote(note));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowNotes);
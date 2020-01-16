import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import { connect } from "react-redux";
import { addNote } from "../actions/actionCreators";
import ShowNotes from "./ShowNotes";

const App = ({ addNote }) => {
  
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <ShowNotes />
      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  notes: state.noteReducer.notes
});

const mapDispatchToProps = (dispatch) => ({
  addNote: note => {
    dispatch(addNote(note));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


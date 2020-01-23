import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import { connect } from 'react-redux';
import { addNote } from '../actions/actionCreators'

const CreateArea = ({ addNote }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      }
    });
  }

  function handleClick(e) {
    if (note.title !== "" || note.content !== "") {
      addNote(note);
      setNote({
        title: "",
        content: ""
      });
    } else {
      alert("Nothing to add.");
    }

    e.preventDefault();
    setIsExpanded(false);
  }

  function expandNote() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          value={note.title}
          placeholder="Title"
          onChange={handleChange}
          onClick={expandNote}
          rows={isExpanded ? "3" : "1"}
        />
        {isExpanded && (
          <textarea
            name="content"
            value={note.content}
            placeholder="Take a note..."
            onChange={handleChange}
            onBlur={handleClick}
          />
        )}
        <Zoom in={isExpanded}>
          <Fab onClick={handleClick} >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div >
  )
}

const mapStateToProps = state => ({
  notes: state.noteReducer.notes,
});

const mapDispatchToProps = (dispatch) => ({
  addNote: note => {
    dispatch(addNote(note));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateArea);
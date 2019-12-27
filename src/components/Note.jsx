import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note" key={props.key}>
      <h1 contentEditable="true">{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  )
}

export default Note;
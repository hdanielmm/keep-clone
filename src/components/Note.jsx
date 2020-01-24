import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Note(props) {
  const [isEditable, setIsEditable] = useState(false);

  const [updatedNote, setUpdatedNote] = useState({
    id: props.id,
    title: props.title,
    content: props.content
  });

  // console.log('props en note', props);

  function handleClick() {
    props.onDelete(props.id);
  }

  const handleUpdate = () => {
    setIsEditable(true);
  }

  const handleChange = e => {
    const { name, value } = e.target;

    setUpdatedNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    });
  }

  const handleOnBlur = () => {
    props.onUpdate(updatedNote);

    setIsEditable(false);
  }

  return (
    <div className="note" key={props.id}>
      {
        isEditable ? (
          <form>
            <input
              name="title"
              value={updatedNote.title}
              onChange={handleChange}
              onBlur={handleOnBlur}
            />
          </form>
        ) : (
            <h1>{props.title}</h1>
          )
      }
      <p>{props.content}</p>

      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
      <button onClick={handleUpdate}>
        <EditIcon />
      </button>

    </div>
  )
}

export default Note;
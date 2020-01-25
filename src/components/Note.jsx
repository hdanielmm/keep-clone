import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
  const [isEditableTitle, setIsEditableTitle] = useState(false);
  const [isEditableContent, setIsEditableContent] = useState(false)

  const [updatedNote, setUpdatedNote] = useState({
    id: props.id,
    title: props.title,
    content: props.content
  });

  // console.log('props en note', props);

  function handleClick() {
    props.onDelete(props.id);
  }

  const handleUpdate = (e) => {
    e.target.localName === "p" ? setIsEditableContent(true) : setIsEditableTitle(true);
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

    setIsEditableTitle(false);
    setIsEditableContent(false);
  }

  return (
    <div className="note" key={props.id}>
      {
        isEditableTitle ? (
          <form>
            <input
              name="title"
              value={updatedNote.title}
              onChange={handleChange}
              onBlur={handleOnBlur}
              autoFocus
            />
          </form>
        ) : (
            <h1 onClick={handleUpdate}>{props.title}</h1>
          )
      }

      {
        isEditableContent ? (
          <form>
            <input
              name="content"
              value={updatedNote.content}
              onChange={handleChange}
              onBlur={handleOnBlur}
              autoFocus
            />
          </form>
        ) : (
            <p onClick={handleUpdate}>{props.content}</p>
          )
      }

      <button onClick={handleClick}>
        <DeleteIcon />
      </button>

    </div>
  )
}

export default Note;
import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [isExpanded, setIsExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });


  function handleChange(e) {
    const { name, value } = e.target;

    // setNote((prevValue) => {
    //   if (name === "title") {
    //     return {
    //       title: value,
    //       content: prevValue.content
    //     };
    //   } else if (name === "content") {
    //     return {
    //       title: prevValue.title,
    //       content: value
    //     }
    //   }
    // });

    // This way to setNote make the same that above way
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      }
    });
  }

  function handleClick(e) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    e.preventDefault();
    setIsExpanded(false);
  }

  function expandNote() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            value={note.title}
            placeholder="Title"
            onChange={handleChange}
          />
        )}
        <textarea
          name="content"
          value={note.content}
          placeholder="Take a note..."
          onChange={handleChange}
          onClick={expandNote}
          rows={isExpanded ? "3" : "1"}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div >
  )
}

export default CreateArea;
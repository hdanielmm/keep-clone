import React, { useState } from 'react'

function CreateArea(props) {

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
  }

  return (
    <div>
      <form>
        <input
          name="title"
          value={note.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea
          name="content"
          value={note.content}
          rows="3"
          cols="30"
          placeholder="Take a note..."
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  )
}

export default CreateArea;
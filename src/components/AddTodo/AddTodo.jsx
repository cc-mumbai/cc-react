import React, { useState } from "react";

import "./AddTodo.css";

function AddTodo({ add_todo }) {
  const [addTitle, setAddTitle] = useState("");

  return (
    <form
      className="add-todo"
      onSubmit={(e) => {
        e.preventDefault();
        add_todo(addTitle);
        setAddTitle("");
      }}
    >
      <input
        type="text"
        placeholder="Add Todo"
        value={addTitle}
        onChange={(e) => {
          setAddTitle(e.target.value);
        }}
      />
      <button>➜</button>
    </form>
  );
}

export default AddTodo;

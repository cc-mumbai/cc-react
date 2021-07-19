import React from "react";

import "./Todo.css";

function Todo({ ind, todo, remove_todo, mark_todo }) {
  return (
    <div className="todo">
      <div
        className={`${todo.done ? "done" : ""}`}
        onClick={() => mark_todo(ind)}
      >
        {todo.name}
      </div>
      <button className="remove" onClick={() => remove_todo(ind)}>
        ✗
      </button>
    </div>
  );
}

export default Todo;

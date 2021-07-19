import React, { useState } from "react";

import Todo from "../Todo/Todo";
import AddTodo from "../AddTodo/AddTodo";

import {
  INIT_TODOS,
  _add_todo,
  _remove_todo,
  _mark_todo
} from "../../utils/todo";

import "./TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState(INIT_TODOS);

  function add_todo(title) {
    setTodos(_add_todo(title, todos));
  }
  function remove_todo(remove_ind) {
    setTodos(_remove_todo(remove_ind, todos));
  }
  function mark_todo(mark_ind) {
    setTodos(_mark_todo(mark_ind, todos));
  }

  return (
    <div className="todo-list">
      <h1>Todo App</h1>
      <AddTodo add_todo={add_todo} />
      {todos.map((todo, ind) => (
        <Todo
          key={ind}
          ind={ind}
          todo={todo}
          remove_todo={remove_todo}
          mark_todo={mark_todo}
        />
      ))}
    </div>
  );
}

export default TodoList;

import React from "react";
import { useState } from "react";
import "./style.css";

const ToDoInput = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addToDo = () => {
    if (todo.trim() === "") return;
    setTodos(todos.concat(todo));
    setTodo("");
  };

  const remToDo = () => {
    setTodos(todos.slice(0, todos.length - 1));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        maxWidth: "400px",
        margin: "0 auto",
        gap: "10px"
      }}
    >
      <button onClick={addToDo}>Add</button>
      <button onClick={remToDo}>Remove</button>
      <input
        type="text"
        value={todo}
        placeholder="todo"
        onChange={(e) => setTodo(e.target.value)}
      />
      <h1>ToDoList</h1>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoInput;

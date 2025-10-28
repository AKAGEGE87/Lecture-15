import React from "react";
import ToDoInput from "./ToDoInput";
import { useState } from "react";

const ToDoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addToDo = () => {
    if (todos.length === 5) {
      alert("Limit is 5");
      return;
    }
    if (todo.trim() === "") return;
    setTodos(todos.concat(todo));
    setTodo("");
  };

  const remToDo = () => {
    if (todos.length === 0) {
      alert("No ToDos");
      return;
    }
    setTodos(todos.slice(0, todos.length - 1));
  };

  return (
    <>
      <ToDoInput
        add={addToDo}
        rem={remToDo}
        todo={todo}
        setTodo={setTodo}
        setTodos={setTodos}
        todos={todos}
      />
      <h1>ToDoList</h1>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;

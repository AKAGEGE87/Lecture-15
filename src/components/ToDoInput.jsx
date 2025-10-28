import React from "react";
import { useState } from "react";
import "./style.css";
import Button from "./Button";
import Funcshen from "./ToDoList";

const ToDoInput = ({ add, rem, todo, setTodo, todos, setTodos }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        maxWidth: "400px",
        margin: "0 auto",
        gap: "10px",
        backgroundColor: "#605c5c",
        padding: "10px",
        borderRadius: "10px"
      }}
    >
      <Button
        text={todo}
        setTodos={setTodos}
        todos={todos}
        setTodo={setTodo}
        btnName={"Add ToDo"}
        prop={add}
      />
      <Button
        text={todo}
        setTodos={setTodos}
        todos={todos}
        setTodo={setTodo}
        btnName={"Remove ToDo"}
        prop={rem}
      />
      <input
        type="text"
        value={todo}
        placeholder="todo"
        onChange={(e) => setTodo(e.target.value)}
      />
      {/* <Funcshen /> */}
    </div>
  );
};

export default ToDoInput;

import React from "react";

const Button = ({ prop, btnName }) => {
  // const addToDo = () => {
  //   if (text.trim() === "") return;
  //   setTodos(todos.concat(text));
  //   setTodo("");
  // };
  // const remToDo = () => {
  //   setTodos(todos.slice(0, todos.length - 1));
  // };

  return (
    <>
      <button onClick={prop}>{btnName}</button>
      {/* <button onClick={remToDo}>{btnName}</button> */}
    </>
  );
};

export default Button;

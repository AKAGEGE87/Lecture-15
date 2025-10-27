import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ToDoInput />
      <Button />
      <ToDoList />
    </div>
  );
}

export default App;

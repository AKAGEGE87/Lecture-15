import "./App.css";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div
      style={{
        maxWidth: "1440px",
        height: "100vh",
        backgroundColor: "#123123",
        margin: "auto",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <ToDoList />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
// import InputBox from "./components/InputBox";
import ToDoList from "./components/ToDoList";

const prevTask = [
  {
    id: 1,
    task: "Complete homework",
    status: "pending",
  },
  {
    id: 2,
    task: "Buy groceries",
    status: "completed",
  },
  {
    id: 3,
    task: "Call mom",
    status: "in-progress",
  },
  {
    id: 4,
    task: "Clean the room",
    status: "pending",
  },
  {
    id: 5,
    task: "Read a book",
    status: "completed",
  },
  {
    id: 6,
    task: "Complete The Todo",
    status: "in-progress",
  },
];

const App = () => {
  const [task, setTask] = useState(prevTask);
  const [newTask, setNewtask] = useState("");

  return (
    <div className="main-div d-flex flex-column align-items-center p-4 max-w-[800px] mx-auto ">
      <h3 className="text-light">
        <span style={{ color: "#E4E4E4", font: "bold" }}>To-Do List</span>
      </h3>
      {/* <InputBox todoTasks={todoTasks} /> */}
      <ToDoList
        taskTodo={task}
        setTaskTodo={setTask}
        newTask={newTask}
        setNewtask={setNewtask}
      />
    </div>
  );
};

export default App;

import { useState } from "react";
import { assets } from "../assets/assets";

const ToDoList = ({ taskTodo, setTaskTodo, newTask, setNewtask }) => {
  const [filterText, setFilterText] = useState("");
  const [ischecked, setIschecked] = useState({});
  //   const [editTodo, setEditTodo] = useState(false);

  //   const handleEditing = () => {
  //     setEditTodo(true);
  //   };
  //   let viewMode = {};
  //   let editMode = {};
  //   if (editing) {
  //     viewMode.display = "none";
  //   } else {
  //     editMode.display = "none";
  //   }

  const handleCheckboxChange = (id) => {
    setIschecked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;
    const newTaskObject = {
      id: taskTodo.length + 1,
      task: newTask,
      status: "pending",
    };
    setTaskTodo([...taskTodo, newTaskObject]);
    setNewtask("");
  };

  const handleDeleteTodo = (id) => {
    const removeItem = taskTodo.filter((task) => task.id !== id);
    setTaskTodo(removeItem);
  };

  // Filter tasks based on search text
  const filteredTasks = taskTodo.filter((task) =>
    task.task.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <>
      <form onSubmit={handleAddTask}>
        <div className="custom-width input-div d-flex justify-content-between py-2 px-1 gap-3">
          <input
            type="text"
            name="Filter-task"
            placeholder="Search tasks"
            className="filter-fied w-25  py-1 px-2 border rounded-pill"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
          <div className="add-div d-flex justify-content-between ">
            <input
              type="text"
              name="Add-Task"
              placeholder="Write your next task here..."
              className="w-100 py-1 px-2 border rounded-pill "
              value={newTask}
              onChange={(e) => setNewtask(e.target.value)}
            />
            <button
              type="submit"
              className="d-flex align-items-center gap-1 add-button py-1 px-4 rounded-pill"
            >
              <img src={assets.plus} alt="" className="add-img " />
              Add
            </button>
          </div>
        </div>
      </form>
      <div className="custom-width scrollable-div p-3 border-top">
        <ul className="list-unstyled ">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <li
                key={task.id}
                className="d-flex align-items-center justify-content-between gap-5 mb-2 "
              >
                <div className="d-flex gap-1">
                  <input
                    type="checkbox"
                    name="checkbox"
                    checked={!!ischecked[task.id]}
                    onChange={() => handleCheckboxChange(task.id)}
                  />
                  <span
                    style={{
                      textDecoration: ischecked[task.id]
                        ? "line-through"
                        : "none",
                      //   color: "green",
                      color: ischecked[task.id] ? "green" : "white",
                    }}
                  >
                    {task.task}
                  </span>
                </div>
                <div className="d-flex gap-2">
                  {/* {ischecked[task.id] && (
                    <button className="border border-none px-1">
                      Completed
                    </button>
                  )} */}
                  {/* <button onClick={handleEditing}>Edit</button> */}

                  <img
                    src={assets.deleteButton}
                    className="delete-img"
                    onClick={() => handleDeleteTodo(task.id)}
                  />
                </div>
              </li>
            ))
          ) : (
            <li className="text-center text-muted">No tasks found.</li>
          )}
        </ul>
      </div>
    </>
  );
};

export default ToDoList;

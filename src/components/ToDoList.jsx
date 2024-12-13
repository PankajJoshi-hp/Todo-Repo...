import { useState } from "react";

const ToDoList = ({ taskTodo, setTaskTodo, newTask, setNewtask }) => {
  const [ischecked, setIschecked] = useState(false);
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
    console.log(newTaskObject);
  };

  const handleDeleteTodo = (id) => {
    const removeItem = taskTodo.filter((task) => {
      return task.id !== id;
    });
    setTaskTodo(removeItem);
  };

  return (
    <>
      <form onSubmit={handleAddTask}>
        <div className="custom-width d-flex justify-content-between py-2">
          <input
            type="text"
            placeholder="Write your next task here"
            className="w-75 py-1"
            value={newTask}
            onChange={(e) => setNewtask(e.target.value)}
          />
          <button type="submit" className="w-25" onSubmit={handleAddTask}>
            Add
          </button>
        </div>
      </form>
      <div className="custom-width scrollable-div p-3 border border-secondary">
        <ul className="list-unstyled">
          {taskTodo
            // .filter((task) => task.status !== "pending")
            .map((task) => (
              <li
                key={task.id}
                className="d-flex align-items-center justify-content-between gap-5 mb-2"
              >
                <div className="d-flex gap-1">
                  <input
                    type="checkbox"
                    checked={!!ischecked[task.id]}
                    onChange={() => handleCheckboxChange(task.id)}
                  />
                  {task.task}
                </div>
                <div className="d-flex gap-2">
                  {ischecked[task.id] && (
                    <button className="border border-none px-1">
                      Completed
                    </button>
                  )}
                  <button
                    className="border border-none px-1"
                    onClick={() => handleDeleteTodo(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default ToDoList;

// Filter search according to name
// Change the UI

import React, { useState } from "react";
import "./Todo.css";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const markAllCompleted = () => {
    const updatedTasks = tasks.map(task => ({ ...task, completed: true }));
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="app">
        <h1>To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
          />
          <button onClick={addTask}>Add</button>
        </div>
        <button onClick={markAllCompleted} className="mark-all">Mark All Completed</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? "completed" : ""}>
              <input type="checkbox" checked={task.completed} onChange={() => toggleTask(index)} />
              <span onClick={() => toggleTask(index)}>{task.text}</span>
              <button onClick={() => removeTask(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;

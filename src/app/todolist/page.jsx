'use client';
import { useState } from "react";

const ToDoList = () => {
  const [toDoText, setToDoText] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const data = e.target.toDoInput.value;
      if (!data) {
        alert("Please enter a task");
        return;
      }
      setToDoList((prevList) => [...prevList, data]);
      setToDoText("");
    } catch (error) {
      console.error("Error adding task:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleDeleteTask = (index) => () => {
    setToDoList((prevList) => prevList.filter((_, i) => i !== index));
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center mb-4">
          <label htmlFor="toDoInput" className="mb-2">
            Add a new task:
          </label>
          <input
            type="text"
            name="toDoInput"
            value={toDoText}
            onChange={(e) => setToDoText(e.target.value)}
            id="toDoInput"
            className="border-2 border-gray-300 rounded p-2 mb-4"
            placeholder="Enter task here"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Task
          </button>
        </div>
      </form>
      <section>
        <h1 className="text-lg font-bold underline">To Do List</h1>
        <ul>
          {toDoList.map((task, index) => (
            <li key={index} className="border-b-2 border-gray-300 p-2">
              {task}

              <button className="bg-red-500 text-white px-3 py-1 rounded-full ml-4" onClick={handleDeleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default ToDoList;

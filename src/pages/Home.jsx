import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "../components/Taskcard";

const HomePage = () => {
  const { tasks } = useContext(TaskContext);
  const navigate = useNavigate();

  const handleAddTask = () => {
    navigate("/add");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">To-Do List</h1>
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>
      <div className="grid gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

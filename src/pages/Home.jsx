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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-300 to-gray-400 text-gray-900">
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/path/to/your/texture.jpg')] opacity-20"></div>
        <div className="relative container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-gray-800">To-Do List</h1>
            <button
              onClick={handleAddTask}
              className="px-5 py-3 rounded-lg shadow-md bg-gradient-to-br from-gray-200 to-gray-500 text-gray-800 font-semibold hover:from-gray-300 hover:to-gray-500 transition-transform transform hover:scale-105"
            >
              Add Task
            </button>
          </div>

          {tasks.length > 0 ? (
            <div className="bg-white bg-opacity-75 p-6 rounded-xl shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center mt-12 bg-white bg-opacity-75 p-6 rounded-xl shadow-xl">
              <p className="text-lg font-medium text-gray-700">
                No tasks available. Click "Add Task" to create one.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

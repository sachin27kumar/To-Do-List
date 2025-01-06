import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";

const EditTaskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, updateTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const taskToEdit = tasks.find((task) => task.id === parseInt(id));
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setCompleted(taskToEdit.completed);
    }
  }, [id, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = { id: parseInt(id), title, completed };
    updateTask(parseInt(id), updatedTask);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-300 to-gray-400 text-gray-900">
      <div className="relative container mx-auto px-4 py-12">
        <div className="absolute inset-0 bg-[url('/path/to/your/texture.jpg')] opacity-10"></div>
        <div className="relative z-10 p-8 bg-white bg-opacity-80 rounded-xl shadow-xl">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Edit Task
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-gray-700 font-medium mb-2"
              >
                Task Title:
              </label>
              <input
                id="title"
                type="text"
                placeholder="Enter task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
                className="mr-2 text-indigo-600 focus:ring-indigo-500"
              />
              <label className="text-gray-700">Completed</label>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-5 py-3 rounded-lg shadow-md bg-gradient-to-br from-gray-200 to-gray-500 text-gray-800 font-semibold hover:from-gray-300 hover:to-gray-500 transition-transform transform hover:scale-105"
              >
                Update Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTaskPage;

import React from "react";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ task }) => {
  const navigate = useNavigate();

  const handleEditTask = () => {
    navigate(`/edit/${task.id}`);
  };

  return (
    <div className="p-6 rounded-lg shadow-md bg-gradient-to-br from-white to-gray-200 hover:from-gray-100 hover:to-gray-300 transition-transform transform hover:scale-105 hover:shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{task.title}</h2>
      <p className="text-gray-600 mb-4">
        {task.completed ? "Completed" : "Not Completed"}
      </p>
      <button
        onClick={handleEditTask}
        className="px-4 py-2 rounded-lg shadow-md bg-gradient-to-br from-gray-200 to-gray-400 text-gray-800 font-semibold hover:from-gray-300 hover:to-gray-500 transition-transform transform hover:scale-105"
      >
        Edit Task
      </button>
    </div>
  );
};

export default TaskCard;

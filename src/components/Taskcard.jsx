import React from "react";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ task }) => {
  const navigate = useNavigate();

  const handleEditTask = () => {
    navigate(`/edit/${task.id}`);
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">{task.title}</h2>
      <p className="text-gray-600">
        {task.completed ? "Completed" : "Not Completed"}
      </p>
      <button
        onClick={handleEditTask}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
      >
        Edit Task
      </button>
    </div>
  );
};

export default TaskCard;

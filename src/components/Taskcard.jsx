import React from "react";

const TaskCard = ({ task }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">{task.title}</h2>
      <p className="text-gray-600">
        {task.completed ? "Completed" : "Not Completed"}
      </p>
    </div>
  );
};

export default TaskCard;

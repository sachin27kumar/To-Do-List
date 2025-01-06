import React, { useState } from "react";

const AddTaskPage = () => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // State for alert visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), title, completed };
    addTask(newTask);

    // Show alert and reset the form
    setShowAlert(true);
    setTitle("");
    setCompleted(false);

    // Hide alert after 3 seconds
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Task</h1>

      {showAlert && (
        <div className="bg-green-100 text-green-800 p-2 rounded mb-4">
          Task added successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            className="mr-2"
          />
          Completed
        </label>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTaskPage;

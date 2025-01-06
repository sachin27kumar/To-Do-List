import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import AddTaskPage from "./pages/AddTask";
import EditTaskPage from "./pages/EditTask";
import TaskProvider from "./context/TaskContext";

// Create the routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/add",
    element: <AddTaskPage />,
  },
  {
    path: "/edit/:id",
    element: <EditTaskPage />,
  },
]);

const App = () => {
  return (
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>
  );
};

export default App;

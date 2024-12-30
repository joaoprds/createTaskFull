import React from "react";
import TaskPage from "./pages/TaskPage";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-10 w-full max-w-3xl">
        <TaskPage />
      </div>
    </div>
  );
};

export default App;

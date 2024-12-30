import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import LoginPage from "./pages/LoginPage";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/" /> : <LoginPage onLogin={() => setIsAuthenticated(true)} />
          }
        />
        <Route
          path="/"
          element={isAuthenticated ? <TaskPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import TaskPage from "./pages/TaskPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Default route -> if logged in go to tasks, else to login */}
        <Route path="/" element={<Navigate to="/tasks" />} />

        <Route
          path="/tasks"
          element={
            <PrivateRoute>
              <TaskPage />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Catch-all (optional) */}
        <Route path="*" element={<Navigate to="/tasks" />} />
      </Routes>
    </Router>
  );
}

export default App;

// client/src/services/taskService.js
import axios from "axios";

const API = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL || "http://localhost:5000/api",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ---------- Task API functions ----------

export const getTasks = async () => {
  const res = await API.get("/tasks");
  return res.data; // array of tasks
};

export const createTask = async (taskData) => {
  const res = await API.post("/tasks", taskData);
  return res.data.task;
};

export const updateTask = async (id, taskData) => {
  const res = await API.put(`/tasks/${id}`, taskData);
  return res.data.task;
};

export const deleteTask = async (id) => {
  const res = await API.delete(`/tasks/${id}`);
  return res.data;
};

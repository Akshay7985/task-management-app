import axios from "axios";

// If you added "proxy": "http://localhost:5000" in client/package.json,
// then baseURL "/api" will automatically go to your backend.
const API = axios.create({
  baseURL: "https://task-management-app-eik4.onrender.com/api",
});

// Attach JWT token from localStorage (if present)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // we'll set this manually for now
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ---------- Task API functions ----------

export const getTasks = async () => {
  const res = await API.get("/tasks");
  // Backend returns an array of tasks
  return res.data;
};

export const createTask = async (taskData) => {
  const res = await API.post("/tasks", taskData);
  // { message, task }
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

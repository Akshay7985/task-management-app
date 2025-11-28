// client/src/services/authService.js
import axios from "axios";

const API = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL || "http://localhost:5000/api",
});

// Attach token if present
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ---- Auth API functions ----

export const registerUser = async (userData) => {
  const res = await API.post("/auth/register", userData);
  // backend returns { token, user }
  if (res.data?.token) {
    localStorage.setItem("token", res.data.token);
  }
  return res.data;
};

export const loginUser = async (credentials) => {
  const res = await API.post("/auth/login", credentials);
  if (res.data?.token) {
    localStorage.setItem("token", res.data.token);
  }
  return res.data;
};

// (Optional – if Navbar imports these later)
export const logoutUser = () => {
  localStorage.removeItem("token");
};

export const getToken = () => localStorage.getItem("token");

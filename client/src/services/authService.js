import axios from "axios";

const API = axios.create({
  baseURL: "/api/auth", // proxy -> http://localhost:5000/api/auth
});

// --- token helpers ---

export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

// --- API functions ---

export const registerUser = async (userData) => {
  const res = await API.post("/register", userData);
  // backend returns { message, token, user }
  if (res.data?.token) {
    setToken(res.data.token);
  }
  return res.data;
};

export const loginUser = async (credentials) => {
  const res = await API.post("/login", credentials);
  if (res.data?.token) {
    setToken(res.data.token);
  }
  return res.data;
};

export const logoutUser = () => {
  removeToken();
};

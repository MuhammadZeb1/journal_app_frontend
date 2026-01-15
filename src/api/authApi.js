import axios from "axios";

// Decide baseURL depending on environment
const baseURL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000/api" // Local development
    : "https://journal-app-backend-smoky.vercel.app/"; // Production (Vercel)

// Create Axios instance
const API = axios.create({
  baseURL,
});

// Automatically attach token if exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;

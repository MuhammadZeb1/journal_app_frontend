import axios from "axios";

// This detects if you are working on your computer or if the site is live
const baseURL = window.location.hostname === "localhost"
    ? "http://localhost:5000/api"
    : "https://journal-app-backend-smoky.vercel.app/api"; // Added /api to match your backend routes

const API = axios.create({
  baseURL,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
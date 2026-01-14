import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/authApi.js";

// --- REGISTER ---
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await API.post("/auth/register", userData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// --- LOGIN ---
export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await API.post("/auth/login", userData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// --- FORGOT PASSWORD ---
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email, { rejectWithValue }) => {
    try {
      const res = await API.post("/auth/forgot-password", { email });
      return res.data.message;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// --- RESET PASSWORD ---
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ token, password }, { rejectWithValue }) => {
    try {
      const res = await API.post(`/auth/reset-password/${token}`, { password });
      return res.data.message;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

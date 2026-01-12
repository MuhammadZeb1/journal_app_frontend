import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/authApi";

// Fetch all author's manuscripts
export const fetchMyManuscripts = createAsyncThunk(
  "author/fetchMyManuscripts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/author/manuscripts");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

// Create manuscript
export const createManuscript = createAsyncThunk(
  "author/createManuscript",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await API.post("/author/manuscripts", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

// Update manuscript
export const updateManuscript = createAsyncThunk(
  "author/updateManuscript",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const res = await API.put(`/author/manuscripts/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

// Delete manuscript
export const deleteManuscript = createAsyncThunk(
  "author/deleteManuscript",
  async (id, { rejectWithValue }) => {
    try {
      await API.delete(`/author/manuscripts/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

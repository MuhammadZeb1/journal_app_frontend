import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/authApi";

/* ================= AUTHOR ================= */

// Upload manuscript
export const uploadManuscript = createAsyncThunk(
  "manuscript/upload",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await API.post("/manuscripts/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Get author's own manuscripts
export const getMyManuscripts = createAsyncThunk(
  "manuscript/getMy",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/manuscripts/my-papers");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

/* ================= ADMIN ================= */

// Admin: get all manuscripts
export const getAllManuscriptsAdmin = createAsyncThunk(
  "manuscript/getAllAdmin",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/manuscripts");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Assign reviewer
export const assignReviewer = createAsyncThunk(
  "manuscript/assignReviewer",
  async ({ paperId, reviewerId }, { rejectWithValue }) => {
    try {
      const res = await API.put(`/admin/assign-reviewer/${paperId}`, {
        reviewerId,
      });
      return res.data.manuscript;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Publish manuscript
export const publishManuscript = createAsyncThunk(
  "manuscript/publish",
  async (paperId, { rejectWithValue }) => {
    try {
      const res = await API.put(`/admin/publish/${paperId}`);
      return res.data.manuscript;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

/* ================= REVIEWER ================= */

// Reviewer: get assigned papers
export const getAssignedManuscripts = createAsyncThunk(
  "manuscript/getAssigned",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/manuscripts/assigned");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Start review
export const startReview = createAsyncThunk(
  "manuscript/startReview",
  async (paperId, { rejectWithValue }) => {
    try {
      const res = await API.put(`/reviewer/start-review/${paperId}`);
      return res.data.manuscript;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Accept / Reject review
export const reviewDecision = createAsyncThunk(
  "manuscript/reviewDecision",
  async ({ paperId, decision, comments }, { rejectWithValue }) => {
    try {
      const res = await API.put(`/reviewer/decision/${paperId}`, {
        decision,
        comments,
      });
      return res.data.manuscript;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// features/reviewer/reviewerSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/authApi.js";

// Fetch manuscripts assigned to reviewer
export const fetchAssignedManuscripts = createAsyncThunk(
  "reviewer/fetchAssignedManuscripts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/reviewer/manuscripts");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Failed to fetch manuscripts");
    }
  }
);

// Start review
export const startReview = createAsyncThunk(
  "reviewer/startReview",
  async (manuscriptId, { rejectWithValue }) => {
    try {
      const res = await API.post(`/reviewer/manuscripts/${manuscriptId}/start-review`);
      return res.data.manuscript;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Failed to start review");
    }
  }
);

// Submit review
export const submitReview = createAsyncThunk(
  "reviewer/submitReview",
  async ({ manuscriptId, status, reviewerComments }, { rejectWithValue }) => {
    try {
      const res = await API.post(`/reviewer/manuscripts/${manuscriptId}/submit-review`, {
        status,
        reviewerComments,
      });
      return res.data.manuscript;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Failed to submit review");
    }
  }
);

const reviewerSlice = createSlice({
  name: "reviewer",
  initialState: {
    manuscripts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch assigned manuscripts
      .addCase(fetchAssignedManuscripts.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(fetchAssignedManuscripts.fulfilled, (state, action) => { state.loading = false; state.manuscripts = action.payload; })
      .addCase(fetchAssignedManuscripts.rejected, (state, action) => { state.loading = false; state.error = action.payload; })

      // Start review
      .addCase(startReview.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(startReview.fulfilled, (state, action) => {
        state.loading = false;
        state.manuscripts = state.manuscripts.map(m =>
          m._id === action.payload._id ? action.payload : m
        );
      })
      .addCase(startReview.rejected, (state, action) => { state.loading = false; state.error = action.payload; })

      // Submit review
      .addCase(submitReview.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(submitReview.fulfilled, (state, action) => {
        state.loading = false;
        state.manuscripts = state.manuscripts.map(m =>
          m._id === action.payload._id ? action.payload : m
        );
      })
      .addCase(submitReview.rejected, (state, action) => { state.loading = false; state.error = action.payload; });
  },
});

export default reviewerSlice.reducer;

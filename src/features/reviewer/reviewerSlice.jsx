// features/reviewer/reviewerSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/authApi.js";

// 1. Fetch manuscripts assigned to reviewer
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

// 2. Download/Open Manuscript File (Fixes "No token provided" error)
export const downloadManuscriptFile = createAsyncThunk(
  "reviewer/downloadFile",
  async ({ manuscriptId, contentType }, { rejectWithValue }) => {
    try {
      const response = await API.get(`/reviewer/manuscripts/${manuscriptId}/file`, {
        responseType: "blob", // Essential for binary data like PDFs
      });

      // Create a local URL for the downloaded blob
      const file = new Blob([response.data], { type: contentType || "application/pdf" });
      const fileURL = URL.createObjectURL(file);

      // Open in a new tab
      window.open(fileURL, "_blank");

      // Clean up the URL object memory after a short delay
      setTimeout(() => URL.revokeObjectURL(fileURL), 5000);
      
      return manuscriptId;
    } catch (err) {
      return rejectWithValue("Failed to open file. You may not have permission.");
    }
  }
);

// 3. Start review (Changes status to 'under_review')
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

// 4. Submit review (Changes status to 'accepted' or 'rejected')
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

      // Download File (Optional: track loading state for the file)
      .addCase(downloadManuscriptFile.pending, (state) => { state.loading = true; })
      .addCase(downloadManuscriptFile.fulfilled, (state) => { state.loading = false; })
      .addCase(downloadManuscriptFile.rejected, (state, action) => { state.loading = false; state.error = action.payload; })

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
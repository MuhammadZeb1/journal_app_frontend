// redux/adminSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/authApi";

// Fetch all manuscripts
export const fetchManuscripts = createAsyncThunk(
  "admin/fetchManuscripts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/admin/manuscripts");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Assign reviewer
export const assignReviewer = createAsyncThunk(
  "admin/assignReviewer",
  async ({ manuscriptId, reviewerId }, { rejectWithValue }) => {
    try {
      const res = await API.post("/admin/manuscripts/assign-reviewer", {
        manuscriptId,
        reviewerId,
      });
      return res.data.manuscript;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Toggle publish/unpublish
export const togglePublish = createAsyncThunk(
  "admin/togglePublish",
  async ({ manuscriptId }, { rejectWithValue }) => {
    try {
      const res = await API.post("/admin/manuscripts/publish", { manuscriptId });
      return res.data.manuscript;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    manuscripts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch manuscripts
      .addCase(fetchManuscripts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchManuscripts.fulfilled, (state, action) => {
        state.loading = false;
        state.manuscripts = action.payload;
      })
      .addCase(fetchManuscripts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Assign reviewer
      .addCase(assignReviewer.fulfilled, (state, action) => {
        const index = state.manuscripts.findIndex(
          (m) => m._id === action.payload._id
        );
        if (index !== -1) state.manuscripts[index] = action.payload;
      })
      // Toggle publish
      .addCase(togglePublish.fulfilled, (state, action) => {
        const index = state.manuscripts.findIndex(
          (m) => m._id === action.payload._id
        );
        if (index !== -1) state.manuscripts[index] = action.payload;
      });
  },
});

export default adminSlice.reducer;

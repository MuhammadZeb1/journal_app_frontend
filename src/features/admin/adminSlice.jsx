import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/authApi.js";

// FETCH ALL MANUSCRIPTS
export const fetchAllManuscripts = createAsyncThunk(
  "admin/fetchAllManuscripts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/admin/manuscripts");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Failed to fetch manuscripts");
    }
  }
);

// TOGGLE PUBLISH STATUS
export const togglePublishStatus = createAsyncThunk(
  "admin/togglePublishStatus",
  async (manuscriptId, { rejectWithValue }) => {
    try {
      const res = await API.post("/admin/manuscripts/publish-toggle", { manuscriptId });
      return res.data.manuscript;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Failed to toggle publish status");
    }
  }
);

// FETCH ALL EXPERTS
export const fetchExperts = createAsyncThunk(
  "admin/fetchExperts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/admin/experts");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Failed to fetch experts");
    }
  }
);

// ASSIGN REVIEWER
export const assignReviewer = createAsyncThunk(
  "admin/assignReviewer",
  async ({ manuscriptId, reviewerId }, { rejectWithValue }) => {
    try {
      const res = await API.post("/admin/manuscripts/assign-reviewer", { manuscriptId, reviewerId });
      return res.data.manuscript;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Failed to assign reviewer");
    }
  }
);

const adminManuscriptsSlice = createSlice({
  name: "adminManuscripts",
  initialState: {
    manuscripts: [],
    experts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllManuscripts.pending, (state) => { state.loading = true; })
      .addCase(fetchAllManuscripts.fulfilled, (state, action) => {
        state.loading = false;
        state.manuscripts = action.payload;
      })
      .addCase(fetchAllManuscripts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle Publish Toggle and Assign Reviewer (both update a single manuscript)
      .addMatcher(
        (action) => [togglePublishStatus.fulfilled.type, assignReviewer.fulfilled.type].includes(action.type),
        (state, action) => {
          state.loading = false;
          const index = state.manuscripts.findIndex((m) => m._id === action.payload._id);
          if (index !== -1) state.manuscripts[index] = action.payload;
        }
      );
  },
});

export default adminManuscriptsSlice.reducer;
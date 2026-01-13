import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/authApi.js";

/** -----------------------
 * FETCH ALL MANUSCRIPTS
 * -----------------------
 */
export const fetchAllManuscripts = createAsyncThunk(
  "admin/fetchAllManuscripts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/admin/manuscripts");
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch manuscripts"
      );
    }
  }
);

/** -----------------------
 * FETCH ALL EXPERTS
 * -----------------------
 */
export const fetchExperts = createAsyncThunk(
  "admin/fetchExperts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/admin/experts"); // create this endpoint in backend
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Failed to fetch experts");
    }
  }
);

/** -----------------------
 * ASSIGN REVIEWER
 * -----------------------
 */
export const assignReviewer = createAsyncThunk(
  "admin/assignReviewer",
  async ({ manuscriptId, reviewerId }, { rejectWithValue }) => {
    try {
      const res = await API.post("/admin/manuscripts/assign-reviewer", {
        manuscriptId,
        reviewerId,
      });
      return res.data.manuscript; // updated manuscript
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Failed to assign reviewer");
    }
  }
);

/** -----------------------
 * SLICE
 * -----------------------
 */
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
      // Fetch manuscripts
      .addCase(fetchAllManuscripts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllManuscripts.fulfilled, (state, action) => {
        state.loading = false;
        state.manuscripts = action.payload;
      })
      .addCase(fetchAllManuscripts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch experts
      .addCase(fetchExperts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExperts.fulfilled, (state, action) => {
        state.loading = false;
        state.experts = action.payload;
      })
      .addCase(fetchExperts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Assign reviewer
      .addCase(assignReviewer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(assignReviewer.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.manuscripts.findIndex(
          (m) => m._id === action.payload._id
        );
        if (index !== -1) state.manuscripts[index] = action.payload;
      })
      .addCase(assignReviewer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default adminManuscriptsSlice.reducer;

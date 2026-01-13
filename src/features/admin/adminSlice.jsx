import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/authApi.js";

/**
 * Fetch all manuscripts (Admin)
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

const adminManuscriptsSlice = createSlice({
  name: "adminManuscripts",
  initialState: {
    manuscripts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export default adminManuscriptsSlice.reducer;

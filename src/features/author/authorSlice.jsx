import { createSlice } from "@reduxjs/toolkit";
import { fetchMyManuscripts, createManuscript, deleteManuscript, updateManuscript } from "./authorActions";

const initialState = {
  manuscripts: [],
  loading: false,
  error: null,
};

const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchMyManuscripts.pending, (state) => { state.loading = true; })
      .addCase(fetchMyManuscripts.fulfilled, (state, action) => {
        state.loading = false;
        state.manuscripts = action.payload;
      })
      .addCase(fetchMyManuscripts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Create
      .addCase(createManuscript.fulfilled, (state, action) => {
        state.manuscripts.push(action.payload);
      })
      // Delete
      .addCase(deleteManuscript.fulfilled, (state, action) => {
        state.manuscripts = state.manuscripts.filter(m => m._id !== action.payload);
      })
      // Update
      .addCase(updateManuscript.fulfilled, (state, action) => {
        const index = state.manuscripts.findIndex(m => m._id === action.payload._id);
        if (index !== -1) state.manuscripts[index] = action.payload;
      });
  }
});

export default authorSlice.reducer;

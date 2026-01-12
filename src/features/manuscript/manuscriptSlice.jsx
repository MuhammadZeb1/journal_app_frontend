import { createSlice } from "@reduxjs/toolkit";
import {
  uploadManuscript,
  getMyManuscripts,
  getAllManuscriptsAdmin,
  assignReviewer,
  publishManuscript,
  getAssignedManuscripts,
  startReview,
  reviewDecision,
} from "./manuscriptActions.jsx";

const initialState = {
  authorPapers: [],
  adminPapers: [],
  reviewerPapers: [],
  loading: false,
  error: null,
  successMessage: null,
};

const manuscriptSlice = createSlice({
  name: "manuscript",
  initialState,
  reducers: {
    clearMessage: (state) => {
      state.error = null;
      state.successMessage = null;
    },
  },

  extraReducers: (builder) => {
    /* ========= AUTHOR ========= */
    builder
      .addCase(uploadManuscript.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = "Paper uploaded successfully";
        state.authorPapers.push(action.payload);
      })
      .addCase(getMyManuscripts.fulfilled, (state, action) => {
        state.loading = false;
        state.authorPapers = action.payload;
      })

      /* ========= ADMIN ========= */
      .addCase(getAllManuscriptsAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.adminPapers = action.payload;
      })
      .addCase(assignReviewer.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = "Reviewer assigned";
        state.adminPapers = state.adminPapers.map((p) =>
          p._id === action.payload._id ? action.payload : p
        );
      })
      .addCase(publishManuscript.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = "Paper published";
        state.adminPapers = state.adminPapers.map((p) =>
          p._id === action.payload._id ? action.payload : p
        );
      })

      /* ========= REVIEWER ========= */
      .addCase(getAssignedManuscripts.fulfilled, (state, action) => {
        state.loading = false;
        state.reviewerPapers = action.payload;
      })
      .addCase(startReview.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = "Review started";
        state.reviewerPapers = state.reviewerPapers.map((p) =>
          p._id === action.payload._id ? action.payload : p
        );
      })
      .addCase(reviewDecision.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = `Paper ${action.payload.status}`;
        state.reviewerPapers = state.reviewerPapers.map((p) =>
          p._id === action.payload._id ? action.payload : p
        );
      });

    /* ========= COMMON MATCHERS ========= */
    builder
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { clearMessage } = manuscriptSlice.actions;
export default manuscriptSlice.reducer;

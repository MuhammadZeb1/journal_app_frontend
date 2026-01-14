import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser, forgotPassword, resetPassword } from "./authActions";

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
  forgotMsg: null,
  resetMsg: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
    clearMessages: (state) => {
      state.error = null;
      state.forgotMsg = null;
      state.resetMsg = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // --- REGISTER ---
      .addCase(registerUser.pending, (state) => { state.loading = true; })
      .addCase(registerUser.fulfilled, (state) => { state.loading = false; })
      .addCase(registerUser.rejected, (state, action) => { state.loading = false; state.error = action.payload; })

      // --- LOGIN ---
      .addCase(loginUser.pending, (state) => { state.loading = true; })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => { state.loading = false; state.error = action.payload; })

      // --- FORGOT PASSWORD ---
      .addCase(forgotPassword.pending, (state) => { state.loading = true; state.forgotMsg = null; })
      .addCase(forgotPassword.fulfilled, (state, action) => { state.loading = false; state.forgotMsg = action.payload; })
      .addCase(forgotPassword.rejected, (state, action) => { state.loading = false; state.error = action.payload; })

      // --- RESET PASSWORD ---
      .addCase(resetPassword.pending, (state) => { state.loading = true; state.resetMsg = null; })
      .addCase(resetPassword.fulfilled, (state, action) => { state.loading = false; state.resetMsg = action.payload; })
      .addCase(resetPassword.rejected, (state, action) => { state.loading = false; state.error = action.payload; });
  },
});

export const { logout, clearMessages } = authSlice.actions;
export default authSlice.reducer;

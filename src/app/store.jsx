import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import roleReducer from "../features/role/roleSlice.jsx";
import notificationReducer from "../features/notifications/notificationSlice.js";
import manuscriptReducer from "../features/manuscript/manuscriptSlice.jsx";

export const store = configureStore({
  reducer: { 
    auth: authReducer,
    notifications: notificationReducer,
    role: roleReducer,
    manuscripts: manuscriptReducer,
 },
});

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import roleReducer from "../features/role/roleSlice.jsx";
import notificationReducer from "../features/notifications/notificationSlice.js";

import authorReducer from "../features/author/authorSlice.jsx";
import adminManuscriptsReducer from "../features/admin/adminSlice.jsx";
import reviewerReducer from "../features/reviewer/reviewerSlice.jsx";


export const store = configureStore({
  reducer: { 
    auth: authReducer,
    notifications: notificationReducer,
    role: roleReducer,
    author: authorReducer,
    adminManuscripts: adminManuscriptsReducer,
    reviewer: reviewerReducer,
 },
});

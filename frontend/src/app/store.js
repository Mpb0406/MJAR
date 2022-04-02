import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";
import trainingReducer from "../features/Training/TrainingSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    training: trainingReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";
import trainingReducer from "../features/Training/TrainingSlice";
import weightLogReducer from "../features/Nutrition/WeightLogSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    training: trainingReducer,
    weightLog: weightLogReducer,
  },
});

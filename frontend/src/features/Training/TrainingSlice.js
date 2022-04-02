import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import TrainingService from "./TrainingService";

const initialState = {
  blocks: [],
  weeks: [],
  days: [],
  isLoading: false,
  isSuccess: false,
  isError: true,
  message: "",
};

export const trainingSlice = createSlice({
  name: "training",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {},
});

export default trainingSlice.reducer;

export const { reset } = trainingSlice.actions;

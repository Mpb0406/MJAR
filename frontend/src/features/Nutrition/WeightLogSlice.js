import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import WeightLogService from "./WeightLogService";

const dailyWeight = JSON.parse(localStorage.getItem("dailyWeight"));

const initialState = {
  dailyWeight: dailyWeight ? dailyWeight : [],
  isLoading: false,
  isSuccess: false,
  isError: true,
  message: "",
};

// Get All Daily Weight Logs
export const getWeightLogs = createAsyncThunk(
  "weightlog/getWeightLogs",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await WeightLogService.getWeightLogs(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Log New Daily Weight
export const logWeight = createAsyncThunk(
  "weightlog/logWeight",
  async (formData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await WeightLogService.logWeight(token, formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const weightLogSlice = createSlice({
  name: "weightlog",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeightLogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWeightLogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.dailyWeight = action.payload;
      })
      .addCase(getWeightLogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(logWeight.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logWeight.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.dailyWeight = action.payload;
      })
      .addCase(logWeight.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default weightLogSlice.reducer;

export const { reset } = weightLogSlice.actions;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import TrainingService from "./TrainingService";

const initialState = {
  blocks: [],
  weeks: [],
  days: [],
  day: {},
  isLoading: false,
  isSuccess: false,
  isError: true,
  message: "",
};

// Get All Training Blocks
export const getBlocks = createAsyncThunk(
  "training/getBlocks",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await TrainingService.getBlocks(token);
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

// Get Training Weeks by Block ID
export const getWeeks = createAsyncThunk(
  "training/getWeeks",
  async (blockId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await TrainingService.getWeeks(blockId, token);
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

// Get Training Days by Week ID
export const getDays = createAsyncThunk(
  "training/getDays",
  async (weekId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await TrainingService.getDays(weekId, token);
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
  extraReducers: (builder) => {
    builder
      .addCase(getBlocks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlocks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blocks = action.payload;
      })
      .addCase(getBlocks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getWeeks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWeeks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.weeks = action.payload;
      })
      .addCase(getWeeks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getDays.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDays.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.days = action.payload;
      })
      .addCase(getDays.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default trainingSlice.reducer;

export const { reset } = trainingSlice.actions;

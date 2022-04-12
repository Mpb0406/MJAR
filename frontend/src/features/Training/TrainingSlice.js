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

// ****** Training Blocks ******

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

// Create New Block
export const newBlock = createAsyncThunk(
  "training/newBlock",
  async (formData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await TrainingService.newBlock(token, formData);
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

// ****** Training Weeks ******

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

// Create New Week
export const newWeek = createAsyncThunk(
  "training/newWeek",
  async ([blockId, formData], thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return TrainingService.newWeek(token, blockId, formData);
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

// ****** Training Days ******

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

// Add New Day
export const newDay = createAsyncThunk(
  "training/newDay",
  async ([weekId, formData], thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await TrainingService.newDay(token, weekId, formData);
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

// Add New Lift to Training Day
export const newLift = createAsyncThunk(
  "training/newLift",
  async ([dayId, formData], thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await TrainingService.newLift(token, dayId, formData);
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
      })
      .addCase(newBlock.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(newBlock.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blocks = action.payload;
      })
      .addCase(newWeek.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(newWeek.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.weeks = action.payload;
      })
      .addCase(newWeek.rejected, (state, action) => {
        state.isLoading = false;
        state.rejected = true;
        state.message = action.payload;
      })
      .addCase(newDay.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(newDay.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.days = action.payload;
      })
      .addCase(newDay.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(newLift.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(newLift.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.days = action.payload;
      })
      .addCase(newLift.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      });
  },
});

export default trainingSlice.reducer;

export const { reset } = trainingSlice.actions;

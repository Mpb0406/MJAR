import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import TrainingService from "./TrainingService";

const blocks = JSON.parse(localStorage.getItem("blocks"));
const weeks = JSON.parse(localStorage.getItem("weeks"));
const days = JSON.parse(localStorage.getItem("days"));

const initialState = {
  blocks: blocks ? blocks : [],
  weeks: weeks ? weeks : [],
  days: days ? days : [],
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

// Add Lifts to Training Block
export const addBlockLifts = createAsyncThunk(
  "training/addBlockLifts",
  async ([blockId, liftsArray], thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await TrainingService.chooseLifts(token, blockId, liftsArray);
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

// Delete Training Block
export const deleteBlock = createAsyncThunk(
  "training/deleteBlock",
  async (blockId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await TrainingService.deleteBlock(token, blockId);
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

// Delete Training Week
export const deleteWeek = createAsyncThunk(
  "training/deleteWeek",
  async ([blockId, weekId], thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await TrainingService.deleteWeek(token, blockId, weekId);
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
  async ([blockId, weekId, formData], thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await TrainingService.newDay(token, blockId, weekId, formData);
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
  async ([weekId, dayId, formData], thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await TrainingService.newLift(token, weekId, dayId, formData);
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

//Add New Set to Lift
export const newSet = createAsyncThunk(
  "training/newSet",
  async ([weekId, dayId, liftId, formData], thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await TrainingService.newSet(
        token,
        weekId,
        dayId,
        liftId,
        formData
      );
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

// Delete Set From a Lift
export const deleteSet = createAsyncThunk(
  "training/deleteSet",
  async ([weekId, dayId, liftId, setId], thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await TrainingService.deleteSet(
        token,
        weekId,
        dayId,
        liftId,
        setId
      );
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

// Delete Lift from Training Day
export const deleteLift = createAsyncThunk(
  "training/deleteLift",
  async ([weekId, dayId, liftId], thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await TrainingService.deleteLift(token, weekId, dayId, liftId);
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

// Delete Training Day
export const deleteDay = createAsyncThunk(
  "training/deleteDay",
  async ([weekId, dayId], thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await TrainingService.deleteDay(token, weekId, dayId);
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
      .addCase(addBlockLifts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBlockLifts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blocks = action.payload;
      })
      .addCase(addBlockLifts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
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
      })
      .addCase(newSet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(newSet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.days = action.payload;
      })
      .addCase(newSet.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteSet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteSet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.days = action.payload;
      })
      .addCase(deleteSet.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteLift.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteLift.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.days = action.payload;
      })
      .addCase(deleteLift.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteDay.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteDay.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.days = action.payload;
      })
      .addCase(deleteDay.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteWeek.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteWeek.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.weeks = action.payload;
      })
      .addCase(deleteWeek.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteBlock.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBlock.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blocks = action.payload;
      })
      .addCase(deleteBlock.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default trainingSlice.reducer;

export const { reset } = trainingSlice.actions;

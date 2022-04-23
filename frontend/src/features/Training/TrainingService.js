import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ****** Training Blocks ******

// Get Training Blocks
const getBlocks = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get("/api/trainingblocks/mytraining", config);

  return response.data;
};

// Create New Block
const newBlock = async (token, formData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post("/api/trainingblocks/", formData, config);

  return response.data;
};

// ****** Training Weeks ******

// Get Training Weeks
const getWeeks = async (blockId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(
    `/api/trainingweeks/${blockId}/mytraining`,
    config
  );

  return response.data;
};

// Create Training Week
const newWeek = async (token, blockId, formData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    `/api/trainingweeks/${blockId}`,
    formData,
    config
  );

  return response.data;
};

const deleteWeek = async (token, blockId, weekId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(
    `/api/trainingweeks/${blockId}/${weekId}`,
    config
  );

  return response.data;
};

// ****** Training Days ******

// Get Training Days
const getDays = async (weekId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(
    `/api/training/${weekId}/mytraining`,
    config
  );

  return response.data;
};

const newDay = async (token, weekId, formData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    `/api/training/${weekId}`,
    formData,
    config
  );

  return response.data;
};

// Add New Lift to Training Day
const newLift = async (token, weekId, dayId, formData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    `/api/training/${weekId}/${dayId}`,
    formData,
    config
  );

  return response.data;
};

// Add New Set to Lift
const newSet = async (token, weekId, dayId, liftId, formData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    `/api/training/${weekId}/${dayId}/${liftId}`,
    formData,
    config
  );

  return response.data;
};

const deleteSet = async (token, weekId, dayId, liftId, setId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(
    `/api/training/${weekId}/${dayId}/${liftId}/${setId}`,
    config
  );

  return response.data;
};

const deleteLift = async (token, weekId, dayId, liftId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(
    `/api/training/${weekId}/${dayId}/${liftId}`,
    config
  );

  return response.data;
};

const deleteDay = async (token, weekId, dayId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(
    `/api/training/${weekId}/${dayId}`,
    config
  );

  return response.data;
};

const TrainingService = {
  getBlocks,
  getWeeks,
  getDays,
  newBlock,
  newWeek,
  newDay,
  newLift,
  newSet,
  deleteSet,
  deleteLift,
  deleteDay,
  deleteWeek,
};

export default TrainingService;

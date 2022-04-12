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

const TrainingService = {
  getBlocks,
  getWeeks,
  getDays,
  newBlock,
  newWeek,
  newDay,
};

export default TrainingService;

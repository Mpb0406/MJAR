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

  if (response.data) {
    localStorage.setItem("blocks", JSON.stringify(response.data));
  }

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

// Add Lifts to Training Block
const chooseLifts = async (token, blockId, liftsArray) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(liftsArray);
  const response = await axios.put(
    `/api/trainingblocks/${blockId}`,
    liftsArray,
    config
  );

  return response.data;
};

// Delete Training Block
const deleteBlock = async (token, blockId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`/api/trainingblocks/${blockId}`, config);

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

  if (response.data) {
    localStorage.setItem("weeks", JSON.stringify(response.data));
  }

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

  if (response.data) {
    localStorage.setItem("days", JSON.stringify(response.data));
  }

  return response.data;
};

// Add New Training Day
const newDay = async (token, blockId, weekId, formData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    `/api/training/${blockId}/${weekId}`,
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

// Delete Lift From Training Day
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

// Get Specific Day From All Weeks in a Block
const getSelectDays = async (token, dayDesc, blockId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    `/api/training/${blockId}`,
    dayDesc,
    config
  );

  return response.data;
};

const TrainingService = {
  getBlocks,
  getWeeks,
  getDays,
  newBlock,
  chooseLifts,
  newWeek,
  newDay,
  newLift,
  newSet,
  deleteSet,
  deleteLift,
  deleteDay,
  deleteWeek,
  deleteBlock,
  getSelectDays,
};

export default TrainingService;

import axios from "axios";

// ****** Training Blocks ******

//Get Training Blocks
const getBlocks = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get("/api/trainingblocks/mytraining", config);

  return response.data;
};

// ****** Training Weeks ******

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

// ****** Training Days ******

const TrainingService = {
  getBlocks,
  getWeeks,
};

export default TrainingService;

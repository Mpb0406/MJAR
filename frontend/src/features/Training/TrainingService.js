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

const TrainingService = {
  getBlocks,
};

export default TrainingService;

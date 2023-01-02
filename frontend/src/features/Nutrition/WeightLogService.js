import axios from "axios";

// Get all Daily Weight Logs
const getWeightLogs = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get("/api/weightlog/myweightlog", config);
  return response.data;
};

const WeightLogService = {
  getWeightLogs,
};

export default WeightLogService;

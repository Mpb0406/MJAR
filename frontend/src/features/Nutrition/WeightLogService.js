import axios from "axios";

// Get all Daily Weight Logs
const getWeightLogs = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get("/api/weightlog/myweightlog", config);

  if (response.data) {
    localStorage.setItem("dailyWeight", JSON.stringify(response.data));
  }

  return response.data;
};

// Log New Daily Weight
const logWeight = async (token, formData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post("/api/weightlog/", formData, config);

  return response.data;
};

const WeightLogService = {
  getWeightLogs,
  logWeight,
};

export default WeightLogService;

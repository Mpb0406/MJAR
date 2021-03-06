import axios from "axios";

const API_URL = "/api/users/";

//Register User
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  console.log(response.data);
  return response.data;
};

// Login User
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  }

  console.log(response.data);
};

// Logout User
const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("blocks");
  localStorage.removeItem("weeks");
  localStorage.removeItem("days");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;

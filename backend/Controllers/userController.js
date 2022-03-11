const asyncHandler = require("express-async-handler");

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("Register User");
});

// @desc    Login User
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  res.send("Login User");
});

// @desc    Get User Info
// @route   GET /api/users/me
// @access  Private
const getUser = asyncHandler(async (req, res) => {
  res.send("Get user info");
});

module.exports = { registerUser, loginUser, getUser };

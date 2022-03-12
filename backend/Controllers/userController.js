const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check if fields are populated
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists with this email");
  }

  // Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Build User Object
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // Check if User was Created
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
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

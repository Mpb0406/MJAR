const express = require("express");
const router = express.Router();

router.get("/me", (req, res) => {
  res.send("Get User Info");
});

router.post("/", (req, res) => {
  res.send("Register User");
});

router.post("/login", (req, res) => {
  res.send("Login User");
});

module.exports = router;

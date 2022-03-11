const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

connectDB();

const app = express();
const port = process.env.PORT || 5000;

//Routes
app.use("/api/users", require("./Routes/userRoutes"));

app.listen(port, () => console.log(`Server running on port ${port}`));

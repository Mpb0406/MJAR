const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const { errorHandler } = require("./Middleware/errorMiddleware");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

//Routes
app.use("/api/users", require("./Routes/userRoutes"));
app.use("/api/training", require("./Routes/trainingDayRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));

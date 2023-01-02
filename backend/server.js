const path = require("path");
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
app.use("/api/trainingweeks", require("./Routes/trainingWeekRoutes"));
app.use("/api/trainingblocks", require("./Routes/trainingBlockRoutes"));
app.use("/api/weightlog", require("./Routes/weightLogRoutes"));

// Serve Frontend
if (process.env.NODE_ENV === "production") {
  // Set Static Assets Folder Which Is What We Get After Running NPM Run Build in React
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  // Get Any Route From index.html File Located In Build Folder
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please Set to Production"));
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));

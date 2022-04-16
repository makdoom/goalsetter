const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

// Connection to DB
connectDB();

const PORT = process.env.PORT || 5000;

// Middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

// Server lister
app.listen(PORT, () =>
  console.log(`Server up & running at http://localhost:${PORT}`)
);

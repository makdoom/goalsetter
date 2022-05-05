const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const errorHandler = require("./utils/errorHandler");
const createError = require("http-errors");
const path = require("path");

// Connection to DB
connectDB();

const PORT = process.env.PORT || 5000;

// Middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Routes
app.use("/api/v1/users", require("./routes/userRoutes"));
app.use("/api/v1/notes", require("./routes/noteRoutes"));

// Server frontend
__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set environment to production"));
}

app.use(errorHandler);

app.use(async (req, res, next) => {
  next(createError.NotFound("This route doesn't exists"));
});
// Server lister
app.listen(PORT, () =>
  console.log(`Server up & running at http://localhost:${PORT}`)
);

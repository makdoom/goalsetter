const router = require("express").Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");
const protect = require("../middleware/authMiddelware");

// Register user
router.post("/", registerUser);

// Login User
router.post("/login", loginUser);

// Get user data
router.get("/me", protect, getMe);

module.exports = router;

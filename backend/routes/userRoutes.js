const router = require("express").Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

// Register user
router.post("/", registerUser);

// Login User
router.post("/login", loginUser);

// Get user data
router.get("/me", getMe);

module.exports = router;

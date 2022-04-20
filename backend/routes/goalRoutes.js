const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");
const protect = require("../middleware/authMiddelware");

const router = require("express").Router();

// GET all goals
router.get("/", protect, getGoals);

// Create a single goals
router.post("/", protect, setGoal);

// GET all goals
router.put("/:id", protect, updateGoal);

// GET all goals
router.delete("/:id", protect, deleteGoal);

module.exports = router;

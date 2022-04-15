const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

const router = require("express").Router();

// GET all goals
router.get("/", getGoals);

// Create a single goals
router.post("/", setGoal);

// GET all goals
router.put("/:id", updateGoal);

// GET all goals
router.delete("/:id", deleteGoal);

module.exports = router;

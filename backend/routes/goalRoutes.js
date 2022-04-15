const router = require("express").Router();

// GET all goals
router.get("/", (req, res) => {
  res.status(200).json({ message: "All goals" });
});

// Create a single goals
router.post("/", (req, res) => {
  res.status(200).json({ message: "Goal created" });
});

// GET all goals
router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// GET all goals
router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = router;

// @desc    All goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "All goals" });
};

// @desc    Set goals
// @route   POST /api/goals
// @access  Private
const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add body");
  }
  //   console.log(!req.body);
  res.status(200).json({ message: "Goal created" });
};

// @desc    Update goals
// @route   UPDATE /api/goals
// @access  Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};
// @desc    delete goals
// @route   DELEET /api/goals
// @access  Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };

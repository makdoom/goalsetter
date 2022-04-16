const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

// @desc    All goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

// @desc    Set goals
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add body");
  }

  const newGoal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(newGoal);
});

// @desc    Update goals
// @route   UPDATE /api/goals
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const isGoalExist = await Goal.findById(id);

  if (!isGoalExist) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, { new: true });

  res.status(200).json(updatedGoal);
});

// @desc    delete goals
// @route   DELEET /api/goals
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const isGoalExist = await Goal.findById(id);

  if (!isGoalExist) {
    res.status(400);
    throw new Error("Goal not found");
  }

  await isGoalExist.remove();
  res.status(200).json({ id, message: `Goal deleted successfully` });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };

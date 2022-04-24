const asyncHandler = require("express-async-handler");
const Note = require("../models/noteModel");
const User = require("../models/userModel");
const ErrorResponse = require("../utils/errorResponse");

// @desc    All Notes
// @route   GET /api/notes
// @access  Private
const getNotes = async (req, res, next) => {
  try {
    const notes = await Note.find({ user: req.user.id });

    res.status(200).json({ notes, statusCode: 200, success: true });
  } catch (error) {
    next(error);
  }
};

// @desc   Create Note
// @route   POST /api/note
// @access  Private
const createNote = async (req, res, next) => {
  const { title, description } = req.body;
  try {
    if (!title || !description) {
      return next(new ErrorResponse("Please provide all the fields", 400));
    }

    const newNote = await Note.create({
      user: req.user.id,
      title,
      description,
      isBookmarked: false,
    });

    res.status(200).json({ note: newNote, statusCode: 200, success: true });
  } catch (error) {
    next(error);
  }
};

// @desc    Update note
// @route   UPDATE /api/note
// @access  Private
const updateNote = async (req, res) => {
  const { id } = req.params;
  const goal = await Note.findById(id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  // Check for user
  if (!req.user) {
    res.status(404);
    throw new Error("User not found");
  }

  // Make sure only logged in user can update/delete goal
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  // Update the goal
  const updatedGoal = await Note.findByIdAndUpdate(id, req.body, { new: true });

  res.status(200).json(updatedGoal);
};

// @desc    delete goals
// @route   DELEET /api/goals
// @access  Private
const deleteNote = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const isGoalExist = await Note.findById(id);

  if (!isGoalExist) {
    res.status(400);
    throw new Error("Goal not found");
  }

  // Check for user
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  // Make sure only logged in user can update/delete goal
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await isGoalExist.remove();
  res.status(200).json({ id, message: `Goal deleted successfully` });
});

module.exports = { getNotes, createNote, updateNote, deleteNote };

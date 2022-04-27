const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("express-async-handler");
const createError = require("http-errors");

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
exports.registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(createError.BadRequest("Please provide all the fields"));
  }

  try {
    // Check if user exist
    const userExists = await User.findOne({ email });

    if (userExists) {
      next(createError.Conflict("Email already exists"));
    }

    // Hasing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create User
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      res.status(201).json({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        token: generateToken(newUser.id),
        statusCode: 200,
        success: true,
      });
    }
  } catch (error) {
    next(
      createError.InternalServerError(
        "Internal server error, please try again later"
      )
    );
  }
};

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(createError.BadRequest("Please provide all the fields"));
  }

  try {
    // Check for user email
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id),
        statusCode: 200,
        success: true,
      });
    } else {
      return next(
        createError.Unauthorized("Invalid Credentials, please try again")
      );
    }
  } catch (error) {
    next(
      createError.InternalServerError(
        "Internal server error, please try again later"
      )
    );
  }
};

// @desc    Get user data
// @route   GET /api/users
// @access  Private
exports.getMe = async (req, res, next) => {
  const { id, name, email } = await User.findById(req.user.id);

  res.status(200).json({
    id,
    name,
    email,
  });
};

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

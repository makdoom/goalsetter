const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const ErrorResponse = require("../utils/errorResponse");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decode = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(decode.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      return next(new ErrorResponse("Unauthorized user", 400));
    }
  }

  if (!token) {
    return next(new ErrorResponse("Unauthorized user", 400));
  }
};

module.exports = protect;

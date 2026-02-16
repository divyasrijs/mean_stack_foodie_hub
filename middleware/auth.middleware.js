const jwt = require("jsonwebtoken");

// Middleware to verify JWT token
module.exports = function (req, res, next) {
  const token = req.header("Authorization");

  // If no token found
  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    // Verify token using the same secret used during login
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "your_jwt_secret");
    req.user = decoded; // store user info in request object
    next(); // move to next middleware or controller
  } catch (err) {
    res.status(400).json({ message: "Invalid token." });
  }
};

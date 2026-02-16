// backend/models/feedback.model.js
const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
  message: String,
  rating: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Feedback", feedbackSchema);

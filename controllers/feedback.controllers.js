// backend/controllers/feedback.controllers.js
const Feedback = require("../models/feedback.model");

const submitFeedback = async (req, res) => {
  try {
    const { username, name, email, message, rating } = req.body;

    if (!username || !name || !email || !message || !rating) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newFeedback = new Feedback({
      username,
      name,
      email,
      message,
      rating,
    });

    await newFeedback.save();

    console.log("✅ Feedback saved:", newFeedback);
    res
      .status(201)
      .json({ message: "Feedback submitted successfully", feedback: newFeedback });
  } catch (error) {
    console.error("❌ Error saving feedback:", error);
    res.status(500).json({ message: "Error submitting feedback", error });
  }
};

const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ date: -1 });
    res.status(200).json(feedbacks);
  } catch (error) {
    console.error("❌ Error fetching feedbacks:", error);
    res.status(500).json({ message: "Error fetching feedbacks", error });
  }
};

// ✅ Correct export
module.exports = { submitFeedback, getAllFeedbacks };

// backend/routes/feedback.routes.js
const express = require("express");
const router = express.Router();

// ✅ File name must match exactly: feedback.controllers.js
const { submitFeedback, getAllFeedbacks } = require("../controllers/feedback.controllers");

router.post("/submit", submitFeedback);
router.get("/all", getAllFeedbacks);

module.exports = router;

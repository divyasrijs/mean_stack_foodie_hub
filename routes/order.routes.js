// backend/routes/order.routes.js
const express = require("express");
const router = express.Router();
const { placeOrder, getOrders } = require("../controllers/order.controllers");

// POST route to save order
router.post("/place", placeOrder);

// (Optional) GET route to view all orders
router.get("/get", getOrders);

module.exports = router;
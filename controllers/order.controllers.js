// backend/controllers/order.controller.js
const Order = require("../models/order.model");

exports.placeOrder = async (req, res) => {
  try {
    console.log("🛠️ Received order data:", req.body);

    const { username, items, totalPrice, paymentMode } = req.body;

    // Validate input
    if (!username || !Array.isArray(items) || items.length === 0 || !totalPrice) {
      console.log("❌ Invalid order data:", req.body);
      return res.status(400).json({ message: "Invalid order data" });
    }

    // Create and save order
    const newOrder = new Order({
      username,
      items,
      totalPrice,
      paymentMode: paymentMode || "Cash on Delivery",
      orderDate: new Date()
    });

    await newOrder.save();
    console.log("✅ Order stored successfully:", newOrder);

    res.status(201).json({
      message: "Order placed successfully!",
      order: newOrder
    });
  } catch (error) {
    console.error("❌ Error placing order:", error);
    res.status(500).json({ message: "Failed to place order", error });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ orderDate: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error });
  }
};

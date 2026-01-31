const PaymentModel = require("../models/payment.model");
const paymentInstance = require("../services/payment.service");

const createOrderController = async (req, res) => {
  try {
    let { amount } = req.body;

    if (!amount)
      return res.status(404).json({
        message: "Amount is required",
      });

    let options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    let order = await paymentInstance.orders.create(options);

    let newOrder = await PaymentModel.create({
      order_id: order.id,
      amount: amount,
    });

    return res.status(201).json({
      success: true,
      message: "Order created",
      order: newOrder,
      rzp_key_id: process.env.RZP_KEY_ID,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error,
    });
  }
};

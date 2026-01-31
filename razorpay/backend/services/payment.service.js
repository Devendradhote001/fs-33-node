const Razorpay = require("razorpay");

const paymentInstance = new Razorpay({
  key_id: process.env.RZP_KEY_ID,
  key_secret: process.env.RZP_SECRET_ID,
});

module.exports = paymentInstance;

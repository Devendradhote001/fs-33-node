const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      enum: ["INR", "USD"],
      default: "INR",
    },
    price: {
      type: Number,
      required: true,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    sizes: [
      {
        type: String,
        enum: ["xs", "sm", "xl", "xxl"],
      },
    ],
    colors: [
      {
        type: String,
        enum: ["red", "green", "orange"],
        default: "red",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;

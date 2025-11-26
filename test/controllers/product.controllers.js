const ProductModel = require("../models/product.model");

const createProductController = async (req, res) => {
  try {
    let { productName, description, price, currency, images, colors, sizes } =
      req.body;

    if (!productName || !description || !price || !currency || !images) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    let newProduct = await ProductModel.create({
      productName,
      description,
      price,
      currency,
      images,
      sizes,
      colors,
    });

    return res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
};

module.exports = {
  createProductController,
};

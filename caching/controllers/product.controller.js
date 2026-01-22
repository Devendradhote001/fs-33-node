const { json } = require("express");
const ProductModel = require("../models/product.model");
const { all } = require("../routes/products.routes");
const cacheInstance = require("../services/cache.service");

const createProductController = async (req, res) => {
  try {
    let { productName, category, amount, image } = req.body;

    if (!productName || !category || !amount || !image)
      return res.status(400).json({
        message: "All fields bhej bee",
      });

    let newProduct = await ProductModel.create({
      productName,
      category,
      price: {
        amount,
      },
      image,
    });

    await cacheInstance.del("products");

    return res.status(201).json({
      success: true,
      message: "Product bangya",
      product: newProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "ise",
      error,
    });
  }
};

const getAllProductsController = async (req, res) => {
  try {
    let productsCahche = await cacheInstance.get("products");

    let parsedProducts = JSON.parse(productsCahche);

    if (productsCahche) {
      return res.status(200).json({
        success: true,
        message: "Product fetched",
        products: parsedProducts,
      });
    }

    console.log("mongodb reached...");

    let allProducts = await ProductModel.find();

    await cacheInstance.set("products", JSON.stringify(allProducts));

    return res.status(200).json({
      success: true,
      message: "Fetched products",
      products: allProducts,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "ise",
      error,
    });
  }
};

module.exports = {
  createProductController,
  getAllProductsController,
};

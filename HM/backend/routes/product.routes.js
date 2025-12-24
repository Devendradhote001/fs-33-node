import express from "express";
import {
  createProductController,
  deleteProductController,
  getAllProducts,
  getSingleProductDetail,
  updateProductController,
} from "../controllers/product.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { upload } from "../services/multer.js";

export const router = express.Router();

router.post(
  "/create",
  authMiddleware,
  upload.array("images", 5),
  createProductController
);
router.get("/", getAllProducts);
router.get("/:product_id", getSingleProductDetail);
router.put("/update/:product_id", authMiddleware, updateProductController);
router.delete("/delete/:product_id", authMiddleware, deleteProductController);

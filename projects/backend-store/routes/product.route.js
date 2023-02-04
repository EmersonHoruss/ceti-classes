import { Router } from "express";
import _controller from "../controllers/product.controller.js";

const router = Router();

// Create
router.post("/", _controller.create);

// Read
router.get("/", _controller.read);

// Add Stock
router.put("/addStock", _controller.addStock)

export default router;
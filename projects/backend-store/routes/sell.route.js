import { Router } from "express";
import _controller from "../controllers/sell.controller.js";

const router = Router();

// Create
router.post("/", _controller.create);

// Read
router.get("/", _controller.get);

// Read one
router.get("/:_id", _controller.getOne);

export default router;
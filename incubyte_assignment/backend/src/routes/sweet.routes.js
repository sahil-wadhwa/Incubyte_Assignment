import express from "express";
import Sweet from "../models/Sweet.model.js";
import { protect, adminOnly } from "../middleware/auth.middleware.js";
import { searchSweets } from "../controllers/sweet.controller.js";

import {
  purchaseSweet,
  restockSweet,
} from "../controllers/sweet.controller.js";

const router = express.Router();

// GET all sweets (protected)
router.get("/", protect, async (req, res) => {
  const sweets = await Sweet.find();
  res.json(sweets);
});

router.get("/search", protect, searchSweets);


// POST sweet (ADMIN ONLY)
router.post("/", protect, adminOnly, async (req, res) => {
  try {
    const sweet = await Sweet.create(req.body);
    res.status(201).json(sweet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PURCHASE sweet

router.post("/:id/purchase", protect, purchaseSweet);

// RESTOCK sweet (ADMIN)

router.post("/:id/restock", protect, adminOnly, restockSweet);


export default router;

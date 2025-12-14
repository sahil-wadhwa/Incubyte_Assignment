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
export const purchaseSweet = async (req, res) => {
  try {
    const sweet = await Sweet.findById(req.params.id);

    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    if (sweet.quantity <= 0) {
      return res.status(400).json({ message: "Out of stock" });
    }

    sweet.quantity -= 1;
    await sweet.save();

    res.json(sweet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
router.post("/:id/purchase", protect, purchaseSweet);

// RESTOCK sweet (ADMIN)
export const restockSweet = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid restock amount" });
    }

    const sweet = await Sweet.findById(req.params.id);

    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    sweet.quantity += Number(amount);
    await sweet.save();

    res.json(sweet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
router.post("/:id/restock", protect, adminOnly, restockSweet);


export default router;

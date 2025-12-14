import express from "express";
import {
  createSweet,
  getAllSweets,
  updateSweet,
  deleteSweet,
} from "../controllers/sweet.controller.js";

const router = express.Router();

router.post("/", createSweet);
router.get("/", getAllSweets);
router.put("/:id", updateSweet);
router.delete("/:id", deleteSweet);

export default router;

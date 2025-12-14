import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import { makeAdmin } from "../controllers/auth.controller.js";
import { protect, adminOnly } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/make-admin", protect, adminOnly, makeAdmin);
router.post("/register", register);
router.post("/login", login);

export default router;

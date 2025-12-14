import express from "express";
import cors from "cors";
import sweetRoutes from "./routes/sweet.routes.js";
import authRoutes from "./routes/auth.routes.js";


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/sweets", sweetRoutes);
app.use("/api/auth", authRoutes);



export default app;

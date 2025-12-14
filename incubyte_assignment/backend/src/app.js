import express from "express";
import sweetRoutes from "./routes/sweet.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cors from "cors";




const app = express();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://incubyte-assignment-nu.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/sweets", sweetRoutes);
app.use("/api/auth", authRoutes);



export default app;

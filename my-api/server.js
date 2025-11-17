import express from "express";
import dotenv from "dotenv";
import rootRoute from "./src/routes/root.routes.js";
import { connectDB } from "./src/services/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/", rootRoute);

// Start server
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on http://localhost:${PORT}`);
});

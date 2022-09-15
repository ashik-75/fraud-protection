import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import path from "path";

import { errorHandler } from "./middleware/errorHandler.js";
import analyticsRouter from "./routes/analyticsRouter.js";
import settingsRouter from "./routes/settingsRouter.js";
import userTypeRouter from "./routes/userTypeRouter.js";
import webFrontRouter from "./routes/webFrontRouter.js";
import webhookRouter from "./routes/webhookRoutes.js";

dotenv.config();

const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/home", (req, res) => {
  res.json("Home calling");
});

// TODO: Dashboard Routes
app.use("/api/dashboard", userTypeRouter);
app.use("/api/settings", settingsRouter);
app.use("/api/analytics", analyticsRouter);

// TODO: Webhooks
app.use("/api/webhooks", webhookRouter);

// TODO: webFront api
app.use("/api/front", webFrontRouter);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/dist", "index.html"));
});

app.use(errorHandler);

const port = process.env.PORT || 8001;
const dbUrl = process.env.MONGO_URI;
mongoose
  .connect(dbUrl)
  .then((conn) => console.log(`Mongodb connected at ${conn.connection.host}`))
  .catch((err) => console.log("Failed connection " + err.message));
app.listen(port, () => console.log("Server running on port " + port));

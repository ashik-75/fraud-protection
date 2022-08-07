import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { errorHandler } from "./middleware/errorHandler.js";
import userTypeRouter from "./routes/userTypeRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/home", (req, res) => {
  res.json("Home calling");
});
app.use("/api/userType", userTypeRouter);

app.use(errorHandler);

const port = process.env.port || 8001;
const dbUrl = process.env.MONGO_URI;
mongoose
  .connect(dbUrl, {
    autoIndex: true,
  })
  .then((conn) => console.log(`Mongodb connected at ${conn.connection.host}`))
  .catch((err) => console.log("Failed connection " + err.message));
app.listen(port, () => console.log("Server running on port " + port));

import { Router } from "express";
import {
  getUserUniqueIdFromDb,
  storeUser,
} from "../controllers/userServerController.js";
import webFrontRouter from "./webFrontRouter.js";

const userRouter = Router();

webFrontRouter.route("/storeUser").post(storeUser);
webFrontRouter.route("/getUserId").post(getUserUniqueIdFromDb);
export default userRouter;

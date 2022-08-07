import { Router } from "express";
import {
  addUserType,
  getFraudList,
  getWhiteList,
} from "../controllers/userTypeController.js";

const userTypeRouter = Router();

userTypeRouter.route("/").post(addUserType);
userTypeRouter.route("/whitelist").get(getWhiteList);
userTypeRouter.route("/fraudlist").get(getFraudList);

export default userTypeRouter;

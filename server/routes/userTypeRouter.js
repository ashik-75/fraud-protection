import { Router } from "express";
import {
  addDashboardUser,
  getDashboardUsers,
  removeAllType,
} from "../controllers/userTypeController.js";

const userTypeRouter = Router();

userTypeRouter.route("/users").get(getDashboardUsers).post(addDashboardUser);
userTypeRouter.route("/deleteAll").delete(removeAllType);
export default userTypeRouter;

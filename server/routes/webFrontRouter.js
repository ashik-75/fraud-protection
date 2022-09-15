import { Router } from "express";
import {
  checkSettingsInfo,
  checkUserStatus,
} from "../controllers/webFrontController.js";

const webFrontRouter = Router();

webFrontRouter.route("/settings").get(checkSettingsInfo);
webFrontRouter.route("/userStatus").get(checkUserStatus);

export default webFrontRouter;

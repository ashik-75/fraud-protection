import { Router } from "express";
import {
  addSettingsInfo,
  getSettingsInfo,
} from "../controllers/settingsController.js";

const settingsRouter = Router();

settingsRouter.route("/").post(addSettingsInfo).get(getSettingsInfo);

export default settingsRouter;

import { Router } from "express";
import {
  addAnalyticsInfo,
  getAllAnalyticsInfo,
  getAnalyticsInfo,
} from "../controllers/analyticsController.js";

const analyticsRouter = Router();

analyticsRouter.route("/").get(getAnalyticsInfo).post(addAnalyticsInfo);
analyticsRouter.route("/all").get(getAllAnalyticsInfo);

export default analyticsRouter;

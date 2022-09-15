import { Router } from "express";
import {
  addChargeBackInfo,
  addRefundInfo,
} from "../controllers/webhookController.js";

const webhookRouter = Router();

webhookRouter.route("/refund").post(addRefundInfo);
webhookRouter.route("/chargeback").post(addChargeBackInfo);
export default webhookRouter;

import expressAsyncHandler from "express-async-handler";
import { Settings } from "../models/Settings.js";

export const addSettingsInfo = expressAsyncHandler(async (req, res) => {
  const payload = req.body;
  const settings = await Settings.findOne({
    shop: payload.shop,
  });

  if (settings) {
    settings.blocked = payload?.blocked;
    settings.flagged = payload?.flagged;
    settings.normal = payload?.normal;

    await settings.save();

    res.json(settings);
  } else {
    const result = await Settings.create(payload);
    res.json(result);
  }
});

export const getSettingsInfo = expressAsyncHandler(async (req, res) => {
  const shop = req.query.shop;
  const result = await Settings.findOne({
    shop,
  });

  res.json(result);
});

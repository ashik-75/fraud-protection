import { endOfDay, startOfDay } from "date-fns";
import expressAsyncHandler from "express-async-handler";
import Analytics from "../models/Analytics.js";

export const addAnalyticsInfo = expressAsyncHandler(async (req, res) => {
  const result = await Analytics.create(req.body);

  res.json(result);
});

export const getAnalyticsInfo = expressAsyncHandler(async (req, res) => {
  const { shop, start_date, end_date } = req.query;

  const filteredDate = {
    $gte: start_date,
    $lte: end_date,
  };

  if (start_date && end_date && filteredDate) {
    const result = await Analytics.find({
      shop,
      createdAt: {
        $gte: startOfDay(new Date(start_date)),
        $lte: endOfDay(new Date(end_date)),
      },
    });

    let flagged = result.filter((dt) => dt.status === "flagged");
    let blocked = result.filter((dt) => dt.status === "blocked");

    console.log({ flagged, blocked });

    res.json({
      blocked,
      flagged,
    });
  } else {
    const result = await Analytics.find({
      shop,
    });

    let flagged = result.filter((dt) => dt.status === "flagged");
    let blocked = result.filter((dt) => dt.status === "blocked");

    res.json({
      blocked,
      flagged,
    });
  }
});

export const getAllAnalyticsInfo = expressAsyncHandler(async (req, res) => {
  const { shop } = req.query;

  const blocked = await Analytics.find({ shop });

  if (blocked.length > 0) {
    res.json(blocked);
  } else {
    res.status(404).json({
      errorMessage: "no analytics data",
    });
  }
});

import expressAsyncHandler from "express-async-handler";
import { Settings } from "../models/Settings.js";
import UserType from "../models/UserType.js";

const calculateLevel = (items) => {
  let count = [];
  for (let i = 0; i < 10; i++) {
    count += 1;
    if (items[i]?.status) {
      count.push(i + 1);
    }
  }

  return count;
};

export const checkSettingsInfo = expressAsyncHandler(async (req, res) => {
  const shop = req.query?.shop;

  const settings = await Settings.findOne({
    shop,
  });

  if (settings) {
    res.json({
      blocked: !settings?.blocked?.status,
      flagged: !settings?.flagged?.status,
      normal: !settings?.normal?.status,
    });
  } else {
    res.json({
      blocked: false,
      flagged: false,
      normal: false,
    });
  }
});

// TODO: Send status to frontend
export const checkUserStatus = expressAsyncHandler(async (req, res) => {
  const email = req.query?.email;
  const shop = req.query?.shop;

  const user = await UserType.findOne({
    email,
    shop,
  });

  const webhookUser = await UserType.findOne({ email, shop: "" });

  const settingData = await Settings.findOne({
    shop,
  });

  if (user && user?.userType?.type) {
    res.json({
      status:
        user?.userType?.level || (user.userType?.type === "good" && "normal"),
    });
  } else if (webhookUser && shop) {
    const marking = {
      1: 3,
      2: 5,
      3: 8,
      4: 10,
    };

    const blocked = calculateLevel(settingData?.blocked?.values);
    const flagged = calculateLevel(settingData?.flagged?.values);
    const normal = calculateLevel(settingData?.normal?.values);

    let userScore = webhookUser.webhooks.reduce(
      (prev, curr) =>
        curr.webhookType === "refund"
          ? prev + curr.count * 1
          : curr.count > 4
          ? prev + 10
          : prev + marking[curr.count],
      0
    );

    userScore = userScore > 10 ? 10 : userScore;

    if (blocked.includes(userScore)) {
      res.json({
        status: "blocked",
      });
    } else if (flagged.includes(userScore)) {
      res.json({
        status: "flagged",
      });
    } else {
      res.json({
        status: "normal",
      });
    }
  } else {
    res.json({
      status: "normal",
    });
  }
});

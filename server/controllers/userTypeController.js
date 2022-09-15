import expressAsyncHandler from "express-async-handler";
import UserType from "../models/UserType.js";

export const getDashboardUsers = expressAsyncHandler(async (req, res) => {
  // filter by username | email | ip
  const sortBy = req.query?.sortBy || "updatedAt";
  const searchInfo = req.query.search;
  const page = parseInt(req.query.page) || 1;
  const type = req.query.type;
  const shop = req.query.shop;
  const documentPerPage = parseInt(req.query.limit) || 10;

  const totalDoc = await UserType.find({
    shop,
    "userType.type": type,
    $or: [
      {
        firstName: new RegExp(searchInfo, "i"),
      },
      {
        lastName: new RegExp(searchInfo, "i"),
      },
      {
        email: new RegExp(searchInfo, "i"),
      },
      {
        ip: new RegExp(searchInfo, "i"),
      },
    ],
  }).count();

  const response = await UserType.find({
    shop,
    "userType.type": type,
    $or: [
      {
        firstName: new RegExp(searchInfo, "i"),
      },
      {
        lastName: new RegExp(searchInfo, "i"),
      },
      {
        email: new RegExp(searchInfo, "i"),
      },
      {
        ip: new RegExp(searchInfo, "i"),
      },
    ],
  })
    .skip((page - 1) * documentPerPage)
    .limit(documentPerPage)
    .sort({
      [sortBy]: sortBy === "username" ? 1 : -1,
    });

  res.json({
    users: response,
    totalPage: Math.ceil(totalDoc / documentPerPage),
    currentPage: page,
    totalDoc,
  });
});

export const addDashboardUser = expressAsyncHandler(async (req, res) => {
  const payload = req.body;

  const checkUser = await UserType.findOne({
    shop: payload.shop,
    email: payload.email,
  });

  if (checkUser) {
    res.status(401).json("Email Already Exists");
  } else {
    const result = await UserType.create(payload);

    res.json(result);
  }
});

export const removeAllType = expressAsyncHandler(async (req, res) => {
  const response = await UserType.deleteMany();

  res.json(response);
});

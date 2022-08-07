import expressAsyncHandler from "express-async-handler";
import UserType from "../models/UserType.js";

export const getFraudList = expressAsyncHandler(async (req, res) => {
  // filter by username | email | ip
  const sortBy = req.query?.sortBy || "updatedAt";
  const searchInfo = req.query.search;
  const page = parseInt(req.query.page) || 1;
  const documentPerPage = parseInt(req.query.limit) || 5;

  const totalDoc = await UserType.find({
    "userType.type": "fraud",
    $or: [
      {
        username: new RegExp(searchInfo, "i"),
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
    "userType.type": "fraud",
    $or: [
      {
        username: new RegExp(searchInfo, "i"),
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
    fraudList: response,
    totalPage: Math.ceil(totalDoc / documentPerPage),
    currentPage: page,
    totalDoc,
  });
});

export const getWhiteList = expressAsyncHandler(async (req, res) => {
  console.log("request landed in white list");
  // filter by username | email | ip
  const searchInfo = req.query.search;
  const sortBy = req.query?.sortBy || "updatedAt";
  const page = parseInt(req.query.page) || 1;
  const documentPerPage = parseInt(req.query.limit) || 5;

  const totalDoc = await UserType.find({
    "userType.type": "good",
    $or: [
      {
        username: new RegExp(searchInfo, "i"),
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
    "userType.type": "good",
    $or: [
      {
        username: new RegExp(searchInfo, "i"),
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
    whiteList: response,
    totalPage: Math.ceil(totalDoc / documentPerPage),
    currentPage: page,
    totalDoc,
  });
});

export const addUserType = expressAsyncHandler(async (req, res) => {
  const response = await UserType.create(req.body);
  res.json(response);
});

export const removeAllType = expressAsyncHandler(async (req, res) => {
  const response = await UserType.deleteMany();

  res.json(response);
});

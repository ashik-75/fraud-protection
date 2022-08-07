export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  if (err && err.code === 11000) {
    res.status(statusCode).json("Email Must be Unique");
  } else if (err) {
    res.status(statusCode).json(err.message);
  }
};

export const errorMiddleware = async (err, req, res, next) => {
  console.log("me error middleware me hu->", err.message);

  let statusCode = err.statusCode || 500;

  return res.status(statusCode).json({
    success: false,
    message: err.message || "Internal server error",
  });
};

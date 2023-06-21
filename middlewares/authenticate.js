const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { HttpError } = require("../utils");
const { SECRET_KEY } = process.env;

const authenticate = asyncHandler(async (req, _, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(HttpError(401, "Not authorisation token"));
  }
  if (!token) {
    next(HttpError(401, "Not authorisation token"));
  }

  const { id } = jwt.verify(token, SECRET_KEY);
  console.log(id);
  // надо сервисы юзеров, без них дальше никак
  //   const user = await
  //   if (!user || !user.token) {
  // next(HttpError(401));
  //   }
  //   req.user = user;
  next();
});

module.exports = authenticate;

const jwt = require("jsonwebtoken");
const { HttpError } = require("../utils");
const { SECRET_KEY } = process.env;
const { userService } = require("../services");

const authenticate = async (req, _, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(HttpError(401, "Not authorisation token"));
  }
  if (!token) {
    next(HttpError(401, "Not authorisation token"));
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY);

    const user = await userService.findUserById(id);
    if (!user || !user.token) {
      next(HttpError(401));
    }
    req.user = user;
    next();
  } catch (error) {
    next(HttpError(401));
  }
};

module.exports = authenticate;

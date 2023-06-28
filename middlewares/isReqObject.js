const { HttpError } = require("../utils");

const isReqObject = (req, _, next) => {
  if (typeof req.body !== "object") {
    next(HttpError(400, `Body is not object`));
  }
  console.log("middleware is reqObject work");
  next();
};

module.exports = isReqObject;

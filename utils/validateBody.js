const HttpError = require("./HttpError");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error, value } = schema.validate(req.body);

    if (error) {
      next(HttpError(400, error.message));
    }

    req.body = value;
    next();
  };

  return func;
};

module.exports = validateBody;

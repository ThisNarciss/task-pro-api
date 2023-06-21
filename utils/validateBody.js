const { HttpError } = require("./HttpError");
const Joi = require("joi");

const columnSchema = Joi.object({
  title: Joi.string().required(),
});

const columnValid = (body) => {
  const { error } = columnSchema.validate(body);
  if (error) {
    throw HttpError(400, error.message);
  }
};

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

module.exports = { validateBody, columnValid };

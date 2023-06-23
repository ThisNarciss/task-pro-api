const Joi = require("joi");

const emailSchema = Joi.object({
  email: Joi.string().required(),
  message: Joi.string().required(),
});

module.exports = emailSchema;

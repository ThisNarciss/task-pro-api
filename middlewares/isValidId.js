const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../utils");

const isValidId = (req, _, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    next(HttpError(400, `Id:"${contactId}" is not valid`));
  }
  next();
};

module.exports = isValidId;

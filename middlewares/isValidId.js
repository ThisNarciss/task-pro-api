const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../utils");

const isValidId = (idParams) => {
  const funcValidId = (req, _, next) => {
    const id = req.params[idParams];
    if (!isValidObjectId(id)) {
      next(HttpError(400, `Id:"${id}" is not valid`));
    }
    next();
  };
  return funcValidId;
};

module.exports = isValidId;

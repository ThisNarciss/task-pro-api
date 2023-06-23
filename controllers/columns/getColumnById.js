const { columnService } = require("../../services");
const { HttpError } = require("../../utils");

const getColumnById = async (req, res) => {
  const { _id: owner } = req.user;
  const { columnId } = req.params;
  const result = await columnService.getColumnById({ owner, _id: columnId });
  if (!result) {
    throw HttpError(404);
  }
  return res.json(result);
};

module.exports = getColumnById;

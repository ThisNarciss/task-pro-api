const { columnService } = require("../../services");
const { HttpError } = require("../../utils");

const getColumns = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await columnService.getColumns({ owner }, req.query);
  if (!result) {
    throw HttpError(404);
  }
  return res.json(result);
};

module.exports = getColumns;

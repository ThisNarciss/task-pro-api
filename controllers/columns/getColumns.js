const { columnService } = require("../../services");
const { HttpError } = require("../../utils");

const getColumns = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await columnService.getColumns(owner);
  if (!result) {
    throw HttpError(404);
  }
  res.json({ status: "success", code: 200, data: result });
};

module.exports = getColumns;

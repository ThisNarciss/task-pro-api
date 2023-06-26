const { columnService } = require("../../services");
const { HttpError } = require("../../utils");

const getColumns = async (req, res) => {
  const { board } = req.user;
  const result = await columnService.getColumns(board);
  if (!result) {
    throw HttpError(404);
  }
  res.json({ status: "success", code: 200, data: result });
};

module.exports = getColumns;

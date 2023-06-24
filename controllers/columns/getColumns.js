const { columnService } = require("../../services");
const { HttpError } = require("../../utils");

const getColumns = async (req, res) => {
  const result = await columnService.getColumns();
  if (!result) {
    throw HttpError(404);
  }
  res.json({ status: "success", code: 200, data: result });
};

module.exports = getColumns;

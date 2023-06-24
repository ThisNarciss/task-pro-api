const { columnService } = require("../../services");
const { HttpError } = require("../../utils");

const getColumnById = async (req, res) => {
  const id = req.params.columnId;
  const result = await columnService.getColumnById(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json({ status: "success", code: 200, data: result });
};

module.exports = getColumnById;

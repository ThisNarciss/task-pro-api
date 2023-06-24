const { columnService } = require("../../services");
const { HttpError } = require("../../utils");

const getColumnById = async (req, res) => {
  const { columnId } = req.params;
  const result = await columnService.getColumnById({ columnId });
  if (!result) {
    throw HttpError(404);
  }
  res.json({ status: "success", code: 200, data: result });
};

module.exports = getColumnById;

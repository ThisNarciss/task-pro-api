const { columnService } = require("../../services");
const { HttpError } = require("../../utils");

const deleteColumn = async (req, res) => {
  const { columnId } = req.params;
  const result = await columnService.deleteColumn({ columnId });
  if (!result) {
    throw HttpError(404);
  }
  res.json({ status: "success", code: 200, message: "Column deleted" });
};

module.exports = deleteColumn;

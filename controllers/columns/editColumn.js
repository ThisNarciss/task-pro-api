const { columnService } = require("../../services");
const { HttpError } = require("../../utils");

const editColumn = async (req, res) => {
  const { columnId } = req.params;
  const result = await columnService.editColumn({ columnId }, req.body);
  if (!result) {
    throw HttpError(404);
  }
  res.json({ status: "success", code: 200, data: result });
};

module.exports = editColumn;

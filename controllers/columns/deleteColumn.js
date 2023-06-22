const { columnService } = require("../../services");
const { HttpError } = require("../../utils");

const deleteColumn = async (req, res) => {
  const { _id: owner } = req.user;
  const { columnId } = req.params;
  const result = await columnService.deleteColumn({ owner, _id: columnId });
  if (!result) {
    throw HttpError(404);
  }
  res.json({ message: "Column deleted" });
};

module.exports = deleteColumn;

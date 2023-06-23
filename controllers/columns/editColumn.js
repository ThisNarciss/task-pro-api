const { columnService } = require("../../services");
const { HttpError } = require("../../utils");

const editColumn = async (req, res) => {
  const { _id: owner } = req.user;
  const { columnId } = req.params;
  const result = await columnService.editColumn(
    { owner, _id: columnId },
    req.body
  );
  if (!result) {
    throw HttpError(404);
  }
  return res.json(result);
};

module.exports = editColumn;

const { boardService } = require("../../services");
const { HttpError } = require("../../utils");

const deleteBoard = async (req, res) => {
  const result = await boardService.deleteOne(req.params.boardId);
  if (!result) {
    throw HttpError(404);
  }
  res.json({
    status: "success",
    code: 200,
    data: { message: "board deleted" },
  });
};

module.exports = deleteBoard;

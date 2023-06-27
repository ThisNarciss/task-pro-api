const { boardService } = require("../../services");
const { HttpError } = require("../../utils");

const editBoard = async (req, res) => {
  const id = req.params.boardId;
  const result = await boardService.update(id, req.body);
  if (!result) {
    throw HttpError(404);
  }
  res.json({
    status: "success",
    code: 200,
    data: { board: result },
  });
};

module.exports = editBoard;

const { boardService } = require("../../services");
const { HttpError } = require("../../utils");

const addBoard = async (req, res) => {
  const { _id: owner } = req.user;
  const { title } = req.body;
  const board = await boardService.findBoardByName(title, owner);

  if (board) {
    throw HttpError(409, "A board with that name already exists");
  }

  const result = await boardService.add({ ...req.body, owner });
  if (result.status === 400) {
    throw HttpError(400);
  }
  res.status(201).json({
    status: "success",
    code: 201,
    data: { board: result },
  });
};

module.exports = addBoard;

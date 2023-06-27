const { boardService, columnService, taskServices } = require("../../services");
const { HttpError } = require("../../utils");

const getBoardById = async (req, res) => {
  const id = req.params.boardId;
  const result = await boardService.getOne(id);
  const columns = await columnService.getColumns(id);
  const addTaskInColumn = await Promise.all(
    columns.map(async ({ title, _id, board }) => {
      const tasks = await taskServices.getAll(_id);
      return { _id, title, board, tasks };
    })
  );
  if (!result) {
    throw HttpError(404);
  }
  res.json({
    status: "success",
    code: 200,
    data: { board: result, columns: addTaskInColumn },
  });
};

module.exports = getBoardById;

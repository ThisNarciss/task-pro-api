const { boardService, columnService, taskServices } = require("../../services");
const { HttpError } = require("../../utils");

const getBoardById = async (req, res) => {
  const id = req.params.boardId;
  const owner = id;
  const result = await boardService.getOne(id);
  const columns = await columnService.getColumns(owner);
  const addTaskInColumn = await Promise.all(
    columns.map(async ({ title, _id: owner }) => {
      console.log(title);
      const tasks = await taskServices.getAll(owner);
      return { _id: owner, title, tasks };
    })
  );
  console.log(addTaskInColumn);
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

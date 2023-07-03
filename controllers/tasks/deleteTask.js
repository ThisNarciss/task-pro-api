const { HttpError } = require("../../utils");
const { taskServices } = require("../../services");

const deleteTask = async (req, res) => {
  const { taskId } = req.params;
  const result = await taskServices.delete(taskId);
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json({ status: "success", code: 200, data: { deletedTask: result } });
};

module.exports = deleteTask;

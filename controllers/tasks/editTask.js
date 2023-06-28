const { HttpError } = require("../../utils");
const { taskServices } = require("../../services");

const editTask = async (req, res) => {
  const { taskId } = req.params;
  const result = await taskServices.update(taskId, req.body);
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json({ status: "success", code: 200, data: { task: result } });
};

module.exports = editTask;

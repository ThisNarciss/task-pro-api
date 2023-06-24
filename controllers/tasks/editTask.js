const { HttpError } = require("../../utils");
const { taskServices } = require("../../services");

const editTask = async (req, res) => {
  const { taskId } = req.params;
  const { title, deadline } = req.body;
  if (!title || !deadline) {
    throw HttpError(400, "provide all required fields");
  }
  const result = await taskServices.update(taskId, req.body);
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json({ status: "success", code: 200, data: result });
};

module.exports = editTask;

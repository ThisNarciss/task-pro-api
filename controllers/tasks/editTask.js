const { HttpError } = require("../../utils");
const { taskSchemas } = require("../../models");
const { taskServices } = require("../../services");

const editTask = async (req, res) => {
  const { taskId } = req.params;
  const { error } = taskSchemas.editTaskSchema.validate(req.body);
  if (error) {
    throw HttpError(400, "Provide missing fields");
  }
  const result = await taskServices.update(taskId, req.body);
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json({ status: 200, message: "success", data: result });
};

module.exports = editTask;

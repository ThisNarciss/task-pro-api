const { HttpError } = require("../../utils");
const { taskSchemas } = require("../../models");
const { taskServices } = require("../../services");

const changeTaskColumn = async (req, res) => {
  const { taskId } = req.params;
  const { error } = taskSchemas.changeTaskColumn.validate(req.body);
  if (error) {
    throw HttpError(400, "Missing field column");
  }
  const result = await taskServices.changeColumn(taskId, req.body);
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json({ status: 200, message: "Success", data: result });
};

module.exports = changeTaskColumn;

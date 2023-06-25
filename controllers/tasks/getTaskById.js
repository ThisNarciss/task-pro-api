const { HttpError } = require("../../utils");
const { taskServices } = require("../../services");

const getTaskById = async (req, res) => {
  const { taskId } = req.params;
  const result = await taskServices.getById(taskId);
  if (!result) {
    throw HttpError(404, `not found`);
  }
  res.json({ status: "Success", code: 200, data: result });
};

module.exports = getTaskById;

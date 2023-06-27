const { HttpError } = require("../../utils");
const { taskServices } = require("../../services");

const changeTaskColumn = async (req, res) => {
  const { taskId } = req.params;
  const { column, index } = req.body;
  if (!column || !index) {
    throw HttpError(400, "provide all required fields");
  }
  const result = await taskServices.changeColumn(taskId, req.body);
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json({ status: "Success", code: 200, data: result });
};

module.exports = changeTaskColumn;

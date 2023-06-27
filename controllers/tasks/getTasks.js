const { HttpError } = require("../../utils");
const { taskServices } = require("../../services");

const getTasks = async (req, res) => {
  const { id } = req.user;
  const result = await taskServices.getAll(id);
  if (!result) {
    throw HttpError(404, {
      code: 404,
      message: "Unable to fetch tasks",
    });
  }
  res.json({
    status: "Success",
    code: 200,
    data: result,
  });
};

module.exports = getTasks;

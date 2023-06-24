const { HttpError } = require("../../utils");
const { taskServices } = require("../../services");

const getTasks = async (req, res) => {
  const { _id: ownerId } = req.user;
  const result = await taskServices.getAll(ownerId);
  if (!result) {
    throw HttpError(404, {
      code: 404,
      message: "Unable to fetch tasks",
    });
  }
  res.json({
    status: 200,
    message: "Success",
    data: result,
  });
};

module.exports = getTasks;

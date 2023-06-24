const { HttpError } = require("../../utils");
const { taskServices } = require("../../services");

const addTask = async (req, res) => {
  const { title, deadline, column } = req.body;
  if (!title || !deadline || !column) {
    throw HttpError(400, "provide all required fields");
  }
  const result = await taskServices.add({ ...req.body });
  res.status(201).json({ status: "Success", code: 201, data: result });
};

module.exports = addTask;

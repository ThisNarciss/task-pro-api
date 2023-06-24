const { HttpError } = require("../../utils");
const { taskSchemas } = require("../../models");
const { taskServices } = require("../../services");

const addTask = async (req, res) => {
  const { title, deadline, owner } = req.body;
  if (!title || !deadline || !owner) {
    throw HttpError(400, "provide all required fields");
  }
  const { error } = taskSchemas.addTaskSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  const result = await taskServices.add({ ...req.body });
  res.status(201).json({ code: 201, message: "Success", data: result });
};

module.exports = addTask;

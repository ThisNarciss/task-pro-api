const { ctrlWrapper } = require("../../utils");
const addTask = require("./addTask");
const deleteTask = require("./deleteTask");
const editTask = require("./editTask");
const getTaskById = require("./getTaskById");
const getTasks = require("./getTasks");
const changeTaskColumn = require("./changeTaskOwner");

module.exports = {
  addTask: ctrlWrapper(addTask),
  deleteTask: ctrlWrapper(deleteTask),
  editTask: ctrlWrapper(editTask),
  getTaskById: ctrlWrapper(getTaskById),
  getTasks: ctrlWrapper(getTasks),
  changeTaskColumn: ctrlWrapper(changeTaskColumn),
};

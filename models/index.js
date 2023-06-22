const Board = require("./board");
const { Column, columnJoiSchema } = require("./column");
const { Task, taskSchemas } = require("./task");
const User = require("./user");

module.exports = {
  Board,
  Column,
  columnJoiSchema,
  Task,
  taskSchemas,
  User,
};

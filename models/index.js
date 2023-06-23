const { Board, boardSchemas } = require("./board");
const { Column, columnJoiSchema } = require("./column");
const { Task, taskSchemas } = require("./task");
const { User, userSchemas } = require("./user");

module.exports = {
  Board,
  boardSchemas,
  Column,
  columnJoiSchema,
  Task,
  taskSchemas,
  User,
  userSchemas,
};

const boardsRouter = require("./boards");
const columnsRouter = require("./columns");
const tasksRouter = require("./tasks");
const usersRouter = require("./auth");
const emailRouter = require("./email");

module.exports = {
  boardsRouter,
  usersRouter,
  columnsRouter,
  tasksRouter,
  emailRouter,
};

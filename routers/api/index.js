const boardsRouter = require("./boards");
const columnsRouter = require("./columns");
const tasksRouter = require("./tasks");
const usersRouter = require("./auth");
const emailRouter = require("./email");
const backgroundsRouter = require("./backgrounds");

module.exports = {
  boardsRouter,
  usersRouter,
  columnsRouter,
  tasksRouter,
  emailRouter,
  backgroundsRouter,
};

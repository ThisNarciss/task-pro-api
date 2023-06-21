const boardsRouter = require("./boards");
const columnsRouter = require("./columns");
const tasksRouter = require("./tasks");
const usersRouter = require("./auth");

module.exports = { boardsRouter, usersRouter, columnsRouter, tasksRouter };

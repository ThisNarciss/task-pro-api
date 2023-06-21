const { ctrlWrapper } = require("../../utils");
const addBoard = require("./addBoard");
const deleteBoard = require("./deleteBoard");
const editBoard = require("./editBoard");
const editBoardBackground = require("./editBoardBackground");
const getBoardById = require("./getBoardById");
const getBoards = require("./getBoards");

module.exports = {
  addBoard: ctrlWrapper(addBoard),
  deleteBoard: ctrlWrapper(deleteBoard),
  editBoard: ctrlWrapper(editBoard),
  editBoardBackground: ctrlWrapper(editBoardBackground),
  getBoardById: ctrlWrapper(getBoardById),
  getBoards: ctrlWrapper(getBoards),
};

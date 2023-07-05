const { ctrlWrapper } = require("../../utils");
const addBoard = require("./addBoard");
const deleteBoard = require("./deleteBoard");
const editBoard = require("./editBoard");
const getBoardById = require("./getBoardById");
const getBoards = require("./getBoards");
const updateActive = require("./updateActive");
const changeBackground = require("./changeBackground");

module.exports = {
  addBoard: ctrlWrapper(addBoard),
  deleteBoard: ctrlWrapper(deleteBoard),
  editBoard: ctrlWrapper(editBoard),
  getBoardById: ctrlWrapper(getBoardById),
  getBoards: ctrlWrapper(getBoards),
  updateActive: ctrlWrapper(updateActive),
  changeBackground: ctrlWrapper(changeBackground),
};

const { ctrlWrapper } = require("../../utils");
const addBoard = require("./addBoard");
const deleteBoard = require("./deleteBoard");
const editBoard = require("./editBoard");
const getBoardBackgrounds = require("./getBoardBackgrounds");
const getBoardById = require("./getBoardById");
const getBoards = require("./getBoards");

module.exports = {
  addBoard: ctrlWrapper(addBoard),
  deleteBoard: ctrlWrapper(deleteBoard),
  editBoard: ctrlWrapper(editBoard),
  getBoardBackgrounds: ctrlWrapper(getBoardBackgrounds),
  getBoardById: ctrlWrapper(getBoardById),
  getBoards: ctrlWrapper(getBoards),
};

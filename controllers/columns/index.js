const { ctrlWrapper } = require("../../utils");
const addColumn = require("./addColumn");
const deleteColumn = require("./deleteColumn");
const editColumn = require("./editColumn");
const getColumnById = require("./getColumnById");
const getColumns = require("./getColumns");

module.exports = {
  addColumn: ctrlWrapper(addColumn),
  deleteColumn: ctrlWrapper(deleteColumn),
  editColumn: ctrlWrapper(editColumn),
  getColumnById: ctrlWrapper(getColumnById),
  getColumns: ctrlWrapper(getColumns),
};

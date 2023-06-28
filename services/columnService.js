const { Column } = require("../models");

const getColumns = async (board) => {
  try {
    const result = await Column.find({ board }, "-createdAt -updatedAt");
    return result;
  } catch (error) {
    return error;
  }
};

const getColumnById = async (id) => {
  try {
    const result = await Column.findById(id, "-createdAt -updatedAt");
    return result;
  } catch (error) {
    return error;
  }
};

const addColumn = async (body) => {
  try {
    const result = await Column.create(body);
    return result;
  } catch (error) {
    return error;
  }
};

const deleteColumn = async (id) => {
  try {
    const result = await Column.findByIdAndRemove(id);
    return result;
  } catch (error) {
    return error;
  }
};

const editColumn = async (id, body) => {
  try {
    const result = await Column.findByIdAndUpdate(id, body, {
      new: true,
      select: "-createdAt -updatedAt",
    });
    return result;
  } catch (error) {
    return error;
  }
};
module.exports = {
  getColumns,
  getColumnById,
  deleteColumn,
  addColumn,
  editColumn,
};

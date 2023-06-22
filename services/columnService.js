const { Column } = require("../models");

const getColumns = async (owner) => {
  try {
    const result = await Column.find({ owner }, "-createdAt -updatedAt");
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
    const result = await Column.findByIdAndRemove({ _id: id });
    return result;
  } catch (error) {
    return error;
  }
};

const editColumn = async (id, body) => {
  try {
    const result = await Column.findByIdAndUpdate({ _id: id }, body, {
      new: true,
    });
    return result;
  } catch (error) {
    return error;
  }
};
const columnService = {
  getColumns,
  getColumnById,
  deleteColumn,
  addColumn,
  editColumn,
};
module.exports = columnService;
const { Task } = require("../models");

class TaskService {
  async add(data) {
    const result = await Task.create({ ...data });
    if (!result) {
      return null;
    }
    return result;
  }

  async delete(id) {
    const deletedTask = await Task.findOneAndDelete({ _id: id });
    if (!deletedTask) {
      return null;
    }
    return deletedTask;
  }

  async getAll(column) {
    const allTasks = await Task.find({ column });
    if (!allTasks) {
      return null;
    }
    return allTasks;
  }

  async getById(id) {
    const task = await Task.findOne({ _id: id });
    if (!task) {
      return null;
    }
    return task;
  }

  async changeColumn(id, data) {
    const result = await Task.findByIdAndUpdate(id, { ...data });
    if (!result) {
      return null;
    }
    return result;
  }

  async update(id, data) {
    const result = await Task.findOneAndUpdate({ _id: id }, { ...data });
    if (!result) {
      return null;
    }

    return result;
  }
}

module.exports = new TaskService();

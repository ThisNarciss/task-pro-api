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
    const deletedTask = await Task.findByIdAndRemove(id, {
      select: "_id title column",
    });
    if (!deletedTask) {
      return null;
    }
    return deletedTask;
  }

  async getAll(column) {
    const allTasks = await Task.find({ column }, "-createdAt -updatedAt");
    if (!allTasks) {
      return null;
    }
    return allTasks;
  }

  async getById(id) {
    const task = await Task.findOne({ _id: id }, "-createdAt -updatedAt");
    if (!task) {
      return null;
    }
    return task;
  }

  async changeColumn(id, data) {
    const result = await Task.findByIdAndUpdate(
      id,
      { ...data },
      {
        new: true,
        select: "-createdAt -updatedAt -title -description -priority -deadline",
      }
    );
    if (!result) {
      return null;
    }
    return result;
  }

  async update(id, data) {
    const result = await Task.findByIdAndUpdate(
      id,
      { ...data },
      { new: true, select: "-createdAt -updatedAt" }
    );
    if (!result) {
      return null;
    }

    return result;
  }
}

module.exports = new TaskService();

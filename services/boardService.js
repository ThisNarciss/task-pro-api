const { default: mongoose } = require("mongoose");
const { Board } = require("../models/board");

const getAll = async (owner) => {
  try {
    const result = await Board.find({ owner }, "-createdAt -updatedAt");
    return result;
  } catch (error) {
    return error;
  }
};

const findBoardByName = async (title, owner) => {
  try {
    const user = await Board.findOne({ title, owner }, "-createdAt -updatedAt");
    return user;
  } catch (error) {
    return error;
  }
};

const getOne = async (id) => {
  try {
    const ObjectId = mongoose.Types.ObjectId;
    const searchId = new ObjectId(id);
    const result = await Board.aggregate(
      [
        { $match: { _id: searchId } },
        {
          $lookup: {
            from: "columns",
            localField: "_id",
            foreignField: "board",
            pipeline: [
              {
                $lookup: {
                  from: "tasks",
                  localField: "_id",
                  foreignField: "column",
                  as: "tasks",
                },
              },
            ],
            as: "columns",
          },
        },
        {
          $project: {
            _id: 1,
            title: 1,
            background: 1,
            icon: 1,
            active: 1,
            owner: 1,
            columns: {
              _id: 1,
              title: 1,
              board: 1,
              tasks: {
                _id: 1,
                title: 1,
                description: 1,
                priority: 1,
                deadline: 1,
                column: 1,
                owner: 1,
                index: 1,
              },
            },
          },
        },
      ],
      { select: "-createdAt -updatedAt" }
    );

    if (result.length > 0) {
      return result;
    } else {
      return null;
    }
  } catch (error) {
    return error;
  }
};

const add = async (body) => {
  try {
    const result = await Board.create(body);
    return result;
  } catch (error) {
    return error;
  }
};

const update = async (id, body) => {
  try {
    const result = await Board.findByIdAndUpdate(id, body, {
      new: true,
      select: "_id title background icon active ",
    });
    return result;
  } catch (error) {
    return error;
  }
};

const deleteOne = async (id) => {
  try {
    const result = await Board.findByIdAndRemove(id, {
      select: "_id title",
    });
    return result;
  } catch (error) {
    return error;
  }
};

const updateActiveStatus = async (id, body) => {
  try {
    const result = await Board.findByIdAndUpdate(id, body, {
      new: true,
      select: "active",
    });
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  add,
  deleteOne,
  update,
  getAll,
  getOne,
  updateActiveStatus,
  findBoardByName,
};

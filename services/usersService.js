const { User } = require("../models");

const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email }, "-createdAt -updatedAt");
    return user;
  } catch (error) {
    return error;
  }
};

const findUserById = async (id) => {
  try {
    const user = await User.findOne({ _id: id }, "-createdAt -updatedAt");
    return user;
  } catch (error) {
    return error;
  }
};

const createUser = async (body) => {
  try {
    const user = await User.create(body);
    return user;
  } catch (error) {
    return error;
  }
};

const loginUser = async (id, token) => {
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { token },
      { select: "-password -token -createdAt -updatedAt" }
    );
    return user;
  } catch (error) {
    return error;
  }
};

const logoutUser = async (id) => {
  try {
    await User.findByIdAndUpdate(id, { token: "" });
  } catch (error) {
    return error;
  }
};

const editUserProfile = async (id, body) => {
  try {
    const user = await User.findByIdAndUpdate(
      id,
      {
        ...body,
      },
      { new: true, select: "name email avatarUrl -_id" }
    );
    return user;
  } catch (error) {
    return error;
  }
};

const changeColorTheme = async (id, theme) => {
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { theme: theme },
      { new: true, select: "theme -_id" }
    );
    return user;
  } catch (error) {
    return error;
  }
};

module.exports = {
  findUserByEmail,
  findUserById,
  createUser,
  loginUser,
  logoutUser,
  editUserProfile,
  changeColorTheme,
};

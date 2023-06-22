const { User } = require("../models");

const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    return error;
  }
};

const findUserById = async (id) => {
  try {
    const user = await User.findOne({ _id: id });
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
    await User.findByIdAndUpdate(id, { token });
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

const editUserProfile = async (id, body, avatar) => {
  try {
    await User.findByIdAndUpdate(id, { ...body, avatarUrl: avatar });
  } catch (error) {
    return error;
  }
};

const changeColorTheme = async (id, theme) => {
  try {
    await User.findByIdAndUpdate(id, { theme });
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

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
    const user = await User.findByIdAndUpdate(
      id,
      {
        ...body,
        avatarUrl: avatar,
      },
      { new: true }
    );
    return user;
  } catch (error) {
    return error;
  }
};

const changeColorTheme = async (id, theme) => {
  try {
    const user = await User.findByIdAndUpdate(id, { theme }, { new: true });
    return user.theme;
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

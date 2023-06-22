const { User } = require("../models");

const findUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

const findUserById = async (id) => {
  const user = await User.findOne(id);
  return user;
};

const createUser = async (name, email, hashPassword) => {
  const user = await User.create({ name, email, password: hashPassword });
  return user;
};

const loginUser = async (id, token) => {
  await User.findByIdAndUpdate(id, { token });
};

const logoutUser = async (id) => {
  await User.findByIdAndUpdate(id, { token: "" });
};

const editUserProfile = async (id, body, avatar) => {
  await User.findByIdAndUpdate(id, { ...body, avatarUrl: avatar });
};

const changeColorTheme = async (id, theme) => {
  await User.findByIdAndUpdate(id, { theme });
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

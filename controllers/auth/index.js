const login = require("./loginUser");
const registration = require("./registrationUser");
const getCurrent = require("./getCurrentUser");
const logout = require("./logoutUser");
const editUserTheme = require("./editUserTheme");
const editUserProfile = require('./editsUserProfile')
const { ctrlWrapper } = require("../../utils");

module.exports = {
  login: ctrlWrapper(login),
  registration: ctrlWrapper(registration),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  editUserTheme: ctrlWrapper(editUserTheme),
  editUserProfile: ctrlWrapper(editUserProfile),
};

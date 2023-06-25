const { userService } = require("../../services");

const logout = async (req, res, next) => {
  const id = req.user._id;
  await userService.logoutUser(id);
  res.status(204).send();
};
module.exports = logout;

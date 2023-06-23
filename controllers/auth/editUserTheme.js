const { userService } = require("../../services");

const editUserTheme = async (req, res) => {
  const { theme } = req.body;
  const { _id: id } = req.user;

  const userTheme = await userService.changeColorTheme(id, theme);
  res.json({ status: "success", code: 200, data: { theme: userTheme } });
};
module.exports = editUserTheme;

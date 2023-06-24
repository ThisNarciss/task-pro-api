const { userService } = require("../../services");

const editUserTheme = async (req, res) => {
  const themeChange = req.body.theme;
  const { _id: id } = req.user;

  const theme = await userService.changeColorTheme(id, themeChange);
  res.json({ status: "success", code: 200, data: theme });
};
module.exports = editUserTheme;

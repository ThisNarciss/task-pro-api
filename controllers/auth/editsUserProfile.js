const { userService } = require("../../services");

const editUserProfile = async (req, res) => {
  const { _id: id } = req.user;
  const { body } = req;
  const avatar = req.file.path;
  const updProfile = await userService.editUserProfile(id, body, avatar);
  res.json({ status: "success", code: 200, data: { user: updProfile } });
};

module.exports = editUserProfile;

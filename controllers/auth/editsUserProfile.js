const { userService } = require("../../services");
const { HttpError } = require("../../utils");
const bcrypt = require("bcrypt");

const editUserProfile = async (req, res) => {
  const { _id: id } = req.user;
  console.log(id);
  const { body } = req;
  if (body.password) {
    const hashPassword = await bcrypt.hash(body.password, 10);
    body.password = hashPassword;
  }
  if (body.email) {
    const isExist = await userService.findUserByEmail(body.email);
    if (isExist && JSON.stringify(isExist._id) !== JSON.stringify(id)) {
      throw HttpError(409, "Email already used");
    }
  }
  if (req.file) {
    const avatar = req.file.path;
    body.avatarUrl = avatar;
  }
  const updProfile = await userService.editUserProfile(id, body);

  res.json({ status: "success", code: 200, data: { user: updProfile } });
};

module.exports = editUserProfile;

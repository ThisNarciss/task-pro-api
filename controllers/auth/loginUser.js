const { userService } = require("../../services");
const jwt = require("jsonwebtoken");
const util = require("../../utils");
const bcrypt = require("bcrypt");
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.findUserByEmail(email);
  if (!user) {
    throw util.HttpError(404, "Email or password is wrong");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw util.HttpError(404, "Email or password is wrong");
  }
  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
  const loggedUser = await userService.loginUser(user._id, token);
  res.json({ status: "success", code: 200, data: { user: loggedUser, token } });
};
module.exports = login;

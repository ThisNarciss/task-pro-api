const { userService } = require("../../services");
const { HttpError } = require("../../utils");
const bcrypt = require("bcrypt");

const registration = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await userService.findUserByEmail(email);
  if (user) {
    throw HttpError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  await userService.createUser({
    name,
    email,
    password: hashPassword,
  });
  res.status(201).json({
    status: "success",
    code: 201,
    data: { message: "User added" },
  });
};

module.exports = registration;

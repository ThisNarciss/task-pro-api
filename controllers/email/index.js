const { ctrlWrapper } = require("../../utils");
const sendEmail = require("./sendEmail");

module.exports = { sendEmail: ctrlWrapper(sendEmail) };

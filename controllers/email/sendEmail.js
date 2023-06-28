const sgMail = require("@sendgrid/mail");
const { getSendHelpData } = require("../../utils");

const { SENDGRID_API_KEY, SENDGRID_SEND_EMAIL } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (req, res) => {
  const helpEmail = getSendHelpData(req.body);
  await (async () => {
    const emailOptions = { ...helpEmail, from: SENDGRID_SEND_EMAIL };
    await sgMail.send(emailOptions);
    return true;
  })();

  res.json({
    status: "success",
    code: 200,
    data: { message: "message send successful" },
  });
};

module.exports = sendEmail;

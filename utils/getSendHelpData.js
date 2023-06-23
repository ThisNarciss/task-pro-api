const { HELP_DESK_EMAIL } = process.env;

const getVerifyData = (data) => {
  const verifyEmail = {
    to: HELP_DESK_EMAIL,
    subject: "Need help email",

    html: `<p>${data.message}</p>
    <p>User email - ${data.email}</p>
    <a target="_blank" href="mailto:${data.email}">Click to send answer on user email</a>`,
  };
  return verifyEmail;
};

module.exports = getVerifyData;

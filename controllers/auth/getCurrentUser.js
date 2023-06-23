const getCurrent = async (req, res) => {
  const { token } = req.user;

  res.json({ status: "success", code: 200, data: { token } });
};

module.exports = getCurrent;

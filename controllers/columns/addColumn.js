const { columnService } = require("../../services");

const addColumn = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await columnService.addColumn({ ...req.body, owner });
  return res.status(201).json(result);
};

module.exports = addColumn;

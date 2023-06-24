const { columnService } = require("../../services");
const { HttpError } = require("../../utils");

const addColumn = async (req, res) => {
  const { _id: owner } = req.user;
  
  const result = await columnService.addColumn({ ...req.body, owner });
  if (result.status === 400) {
    throw HttpError(400);
  }
  res.json({ status: "success", code: 201, data: result });
};

module.exports = addColumn;



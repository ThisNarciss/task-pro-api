const { columnService } = require("../../services");
const { HttpError } = require("../../utils");

const addColumn = async (req, res) => {
  const result = await columnService.addColumn({ ...req.body });
  if (result.status === 400) {
    throw HttpError(400);
  }
  res.json({ status: "success", code: 201, data: result });
};

module.exports = addColumn;

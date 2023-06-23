const { boardService } = require("../../services");
const { HttpError } = require("../../utils");

const getBoards = async (req, res) => {
  const owner = "64957536190e7fa0757ffdc2";
  const result = await boardService.getAll(owner);
  if (!result) {
    throw HttpError(400);
  }
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = getBoards;

const { boardService } = require("../../services");
const { HttpError } = require("../../utils");

const addBoard = async (req, res) => {
  const { _id: owner } = req.user;
  console.log(req.body);
  const result = await boardService.add({ ...req.body, owner });
  console.log(result);
  if (result.status === 400) {
    throw HttpError(400);
  }
  res.status(201).json({
    status: "success",
    code: 201,
    data: result,
  });
};

module.exports = addBoard;

const { boardService } = require("../../services");
const { HttpError } = require("../../utils");

const getBoards = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await boardService.getAll(owner);
  if (!result) {
    throw HttpError(400);
  }

  //   const sorting = [...result].sort((a, b) => a.title.localeCompare(b.title));
  //   console.log(sorting);
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = getBoards;

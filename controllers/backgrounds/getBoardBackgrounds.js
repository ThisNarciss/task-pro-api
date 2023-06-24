const { backgroundsService } = require("../../services");

const getBoardBackgrounds = async (req, res) => {
  const result = await backgroundsService.getAll();
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = getBoardBackgrounds;

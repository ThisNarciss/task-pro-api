const { ctrlWrapper } = require("../../utils");
const getBoardBackgrounds = require("./getBoardBackgrounds");

module.exports = { getBoardBackgrounds: ctrlWrapper(getBoardBackgrounds) };

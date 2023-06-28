const { Background } = require("../models");

const getAll = async () => {
  try {
    const result = await Background.find();
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = { getAll };

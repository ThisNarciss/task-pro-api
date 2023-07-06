const Jimp = require("jimp");

const avatarModifier = async (path) => {
  try {
    const result = await Jimp.read(path);
    return result
      .resize(32, 32)
      .quality(90) //
      .write(path);
  } catch (error) {
    console.error(error);
  }
};

module.exports = avatarModifier;

const getUniqAvatarName = (mimetype) => {
  const index = mimetype.indexOf("/");
  const format = mimetype.slice(index + 1, mimetype.length);
  const date = Date.now();
  const uniqAvatarName = `avatar-${date}.${format}`;
  return uniqAvatarName;
};

module.exports = getUniqAvatarName;

const getUniqAvatarName = (id, mimetype) => {
  const index = mimetype.indexOf("/");
  const format = mimetype.slice(index + 1, mimetype.length);
  const uniqAvatarName = `avatar-${id}.${format}`;
  return uniqAvatarName;
};

module.exports = getUniqAvatarName;

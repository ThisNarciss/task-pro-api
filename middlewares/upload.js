const multer = require("multer");
const path = require("path");
const { getUniqAvatarName } = require("../utils");
const tempDir = path.join(process.cwd(), "tmp");

const multerConfig = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, tempDir);
  },
  filename: (req, file, cd) => {
    const { mimetype } = file;
    const { _id: id } = req.user;
    const uniqName = getUniqAvatarName(id, mimetype);
    cd(null, uniqName);
  },
});

const upload = multer({
  storage: multerConfig,
});

module.exports = upload;

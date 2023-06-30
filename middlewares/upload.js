const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const { getUniqAvatarName } = require("../utils");

const { CLOUDINARY_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "/avatars",
  allowedFormats: ["jpg", "png"],
  filename: (req, file, cb) => {
    const { mimetype } = file;
    const uniqName = getUniqAvatarName(mimetype);
    cb(null, uniqName);
  },
});

const upload = multer({ storage });

module.exports = upload;

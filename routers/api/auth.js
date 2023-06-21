const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/auth");

const { authenticate, upload } = require("../../middlewares");

router.post("/register", ctrl.registration);
router.post("/login", ctrl.login);
router.post("/logout", authenticate, ctrl.logout);
router.get("/current", authenticate, ctrl.getCurrent);
router.patch(
  "/profile",
  authenticate,
  upload.single("avatar"),
  ctrl.editUserProfile
);
router.patch(
  "/theme",
  authenticate,

  ctrl.editUserTheme
);

module.exports = router;

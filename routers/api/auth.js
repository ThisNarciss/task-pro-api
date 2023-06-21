const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/auth");

const { authenticate, upload } = require("../../middlewares");

router.post("/register", ctrl.registration);
router.post("/login", ctrl.login);
router.post("/logout", authenticate, ctrl.logout);
router.get("/current", authenticate, ctrl.getCurrent);
router.patch(
  "/current/:userId",
  authenticate,
  upload.single("avatar"),
  ctrl.editUserProfile
);
router.patch(
  "/current/:userId/theme",
  authenticate,

  ctrl.editUserTheme
);

module.exports = router;

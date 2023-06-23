const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/auth");
const { userSchemas } = require("../../models");
const { authenticate, isValidId, upload } = require("../../middlewares");
const utils = require("../../utils");

router.post(
  "/register",
  utils.validateBody(userSchemas.registerSchema),
  ctrl.registration
);

router.post("/login", utils.validateBody(userSchemas.loginSchema), ctrl.login);

router.post("/logout", authenticate, ctrl.logout);

router.get("/current", authenticate, ctrl.getCurrent);

router.put(
  "/current/:userId",
  isValidId("userId"),
  authenticate,
  upload.single("avatar"),
  utils.validateBody(userSchemas.profileSchema),
  ctrl.editUserProfile
);

router.patch(
  "/current/:userId/theme",
  isValidId("userId"),
  authenticate,
  ctrl.editUserTheme
);

module.exports = router;

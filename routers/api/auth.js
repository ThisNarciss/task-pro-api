const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/auth");
const { userSchemas } = require("../../models");
const { authenticate, isValidId, upload } = require("../../middlewares");
const { validateBody } = require("../../utils");

router.post(
  "/register",
  validateBody(userSchemas.registerSchema),
  ctrl.registration
);

router.post("/login", validateBody(userSchemas.loginSchema), ctrl.login);

router.post("/logout", authenticate, ctrl.logout);

router.get("/current", authenticate, ctrl.getCurrent);

router.put(
  "/current/:userId",
  isValidId("userId"),
  authenticate,
  upload.single("avatar"),
  validateBody(userSchemas.profileSchema),
  ctrl.editUserProfile
);

router.patch(
  "/current/:userId/theme",
  isValidId("userId"),
  authenticate,
  validateBody(userSchemas.themeSchema),
  ctrl.editUserTheme
);

module.exports = router;

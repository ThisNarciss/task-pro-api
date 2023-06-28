const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/auth");
const { userSchemas } = require("../../models");
const {
  authenticate,
  isValidId,
  upload,
  isReqObject,
} = require("../../middlewares");
const { validateBody } = require("../../utils");

router.post(
  "/register",
  isReqObject,
  validateBody(userSchemas.registerSchema),

  ctrl.registration
);

router.post(
  "/login",
  isReqObject,
  validateBody(userSchemas.loginSchema),
  ctrl.login
);

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
  isReqObject,
  validateBody(userSchemas.themeSchema),
  ctrl.editUserTheme
);

module.exports = router;

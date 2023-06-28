const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/email");
const { validateBody } = require("../../utils");
const emailSchema = require("../../schemas");
const { authenticate, isReqObject } = require("../../middlewares");

router.post(
  "/",
  authenticate,
  isReqObject,
  validateBody(emailSchema),
  ctrl.sendEmail
);

module.exports = router;

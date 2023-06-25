const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/email");

// const { authenticate } = require("../../middlewares");
const { validateBody } = require("../../utils");
const emailSchema = require("../../schemas");
const { authenticate } = require("../../middlewares");

router.post("/", authenticate, validateBody(emailSchema), ctrl.sendEmail);

module.exports = router;

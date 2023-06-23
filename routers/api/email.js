const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/email");

// const { authenticate } = require("../../middlewares");
const { validateBody } = require("../../utils");
const emailSchema = require("../../schemas");

router.post("/", validateBody(emailSchema), ctrl.sendEmail);

module.exports = router;

const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/columns");
const { columnJoiSchema } = require("../../models");
const { validateBody } = require("../../utils");

const { authenticate, isValidId } = require("../../middlewares");

router.get("/", authenticate, ctrl.getColumns);

router.get("/:columnId", authenticate, isValidId, ctrl.getColumnById);

router.post("/", authenticate, validateBody(columnJoiSchema), ctrl.addColumn);

router.delete("/:columnId", authenticate, isValidId, ctrl.deleteColumn);

router.patch(
  "/:columnId",
  authenticate,
  isValidId,
  validateBody(columnJoiSchema),
  ctrl.editColumn
);

module.exports = router;

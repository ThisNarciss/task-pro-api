const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/columns");
const { columnJoiSchemas } = require("../../models");
const { validateBody } = require("../../utils");

const { authenticate, isValidId } = require("../../middlewares");

router.get("/", authenticate, ctrl.getColumns);

router.get(
  "/:columnId",
  authenticate,
  isValidId("columnId"),
  ctrl.getColumnById
);

router.post(
  "/",
  authenticate,
  validateBody(columnJoiSchemas.addColumnJoiSchema),
  ctrl.addColumn
);

router.delete(
  "/:columnId",
  authenticate,
  isValidId("columnId"),
  ctrl.deleteColumn
);

router.put(
  "/:columnId",
  authenticate,
  isValidId("columnId"),
  validateBody(columnJoiSchemas.editColumnJoiSchema),
  ctrl.editColumn
);

module.exports = router;

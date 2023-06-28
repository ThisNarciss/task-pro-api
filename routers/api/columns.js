const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/columns");
const { columnJoiSchemas } = require("../../models");
const { validateBody } = require("../../utils");

const { authenticate, isValidId, isReqObject } = require("../../middlewares");

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
  isReqObject,
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
  isReqObject,
  validateBody(columnJoiSchemas.editColumnJoiSchema),

  ctrl.editColumn
);

module.exports = router;

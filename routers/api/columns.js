const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/columns");

const { authenticate, isValidId } = require("../../middlewares");

router.get("/", authenticate, ctrl.getColumns);

router.get("/:columnId", authenticate, isValidId, ctrl.getColumnById);

router.post("/", authenticate, ctrl.addColumn);

router.delete("/:columnId", authenticate, isValidId, ctrl.deleteColumn);

router.patch("/:columnId", authenticate, isValidId, ctrl.editColumn);

module.exports = router;

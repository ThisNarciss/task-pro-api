const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/columns");

const { authenticate, isValidId } = require("../../middlewares");

router.get("/", authenticate, ctrl.getColumns);

router.get("/:boardId", authenticate, isValidId, ctrl.getColumnById);

router.post("/", authenticate, ctrl.addColumn);

router.delete("/:boardId", authenticate, isValidId, ctrl.deleteColumn);

router.patch("/:boardId", authenticate, isValidId, ctrl.editColumn);

module.exports = router;

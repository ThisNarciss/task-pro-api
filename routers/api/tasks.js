const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/tasks");

const { authenticate, isValidId } = require("../../middlewares");

router.get("/", authenticate, ctrl.getTasks);

router.get("/:boardId", authenticate, isValidId, ctrl.getTaskById);

router.post("/", authenticate, ctrl.addTask);

router.delete("/:boardId", authenticate, isValidId, ctrl.deleteTask);

router.patch("/:boardId", authenticate, isValidId, ctrl.editTask);

module.exports = router;

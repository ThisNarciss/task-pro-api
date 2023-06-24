const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/tasks");

const { authenticate, isValidId } = require("../../middlewares");

router.get("/", authenticate, ctrl.getTasks);
router.get("/:taskId", authenticate, isValidId, ctrl.getTaskById);
router.post("/", authenticate, ctrl.addTask);
router.delete("/:taskId", authenticate, isValidId, ctrl.deleteTask);
router.put("/:taskId", authenticate, isValidId, ctrl.editTask);
router.patch("/:taskId", authenticate, isValidId, ctrl.changeTaskColumn);

module.exports = router;

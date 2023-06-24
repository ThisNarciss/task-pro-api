const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/tasks");

const { authenticate, isValidId } = require("../../middlewares");
const { validateBody } = require("../../utils");
const { taskSchemas } = require("../../models");

router.get("/", authenticate, ctrl.getTasks);
router.get("/:taskId", authenticate, isValidId("taskId"), ctrl.getTaskById);
router.post(
  "/",
  authenticate,
  validateBody(taskSchemas.addTaskSchema),
  ctrl.addTask
);
router.delete("/:taskId", authenticate, isValidId("taskId"), ctrl.deleteTask);
router.put(
  "/:taskId",
  authenticate,
  isValidId("taskId"),
  validateBody(taskSchemas.editTaskSchema),
  ctrl.editTask
);
router.patch(
  "/:taskId",
  authenticate,
  isValidId("taskId"),
  validateBody(taskSchemas.changeTaskColumn),
  ctrl.changeTaskColumn
);

module.exports = router;

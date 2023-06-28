const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/tasks");

const { authenticate, isValidId, isReqObject } = require("../../middlewares");
const { validateBody } = require("../../utils");
const { taskSchemas } = require("../../models");

router.get("/", authenticate, ctrl.getTasks);
router.get("/:taskId", authenticate, isValidId("taskId"), ctrl.getTaskById);
router.post(
  "/",
  authenticate,
  isReqObject,
  validateBody(taskSchemas.addTaskSchema),
  ctrl.addTask
);
router.delete("/:taskId", authenticate, isValidId("taskId"), ctrl.deleteTask);
router.put(
  "/:taskId",
  authenticate,
  isValidId("taskId"),
  isReqObject,
  validateBody(taskSchemas.editTaskSchema),
  ctrl.editTask
);
router.patch(
  "/:taskId",
  authenticate,
  isValidId("taskId"),
  isReqObject,
  validateBody(taskSchemas.changeTaskColumn),
  ctrl.changeTaskColumn
);

module.exports = router;

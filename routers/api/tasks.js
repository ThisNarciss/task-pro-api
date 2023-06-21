const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/tasks");

const { authenticate, isValidId } = require("../../middlewares");

router.get("/", authenticate, ctrl.getTasks);

router.get("/:taskId", authenticate, isValidId, ctrl.getTaskById);

router.post("/", authenticate, ctrl.addTask);

router.delete("/:taskId", authenticate, isValidId, ctrl.deleteTask);

// router.patch("/:taskId", authenticate, isValidId, ctrl.editTask);
// в данном случае пут, мы не знаем какое поле таски будет меняться, а  их как минимум 4 или делаем 4 патча на каждое из полей таски
router.put("/:taskId", authenticate, isValidId, ctrl.editTask);
// а вот со сменой статуса тут патч, тут да
router.patch("/:taskId", authenticate, isValidId, ctrl.changeTaskOwner);

module.exports = router;

const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/boards");

const { isValidId } = require("../../middlewares");
const { validateBody } = require("../../utils");
const { boardSchemas } = require("../../models");

router.get("/", ctrl.getBoards);

router.get("/:boardId", isValidId("boardId"), ctrl.getBoardById);

router.post("/", validateBody(boardSchemas.addBoardSchema), ctrl.addBoard);

router.delete("/:boardId", isValidId("boardId"), ctrl.deleteBoard);

router.put(
  "/:boardId",
  isValidId("boardId"),
  validateBody(boardSchemas.editBoardSchema),
  ctrl.editBoard
);

router.patch(
  "/:boardId/active",
  isValidId("boardId"),
  validateBody(boardSchemas.editActiveSchema),
  ctrl.updateActive
);

module.exports = router;

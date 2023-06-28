const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/boards");

const { isValidId, authenticate, isReqObject } = require("../../middlewares");
const { validateBody } = require("../../utils");
const { boardSchemas } = require("../../models");

router.get("/", authenticate, ctrl.getBoards);

router.get("/:boardId", authenticate, isValidId("boardId"), ctrl.getBoardById);

router.post(
  "/",
  authenticate,
  isReqObject,
  validateBody(boardSchemas.addBoardSchema),
  ctrl.addBoard
);

router.delete(
  "/:boardId",
  authenticate,
  isValidId("boardId"),
  ctrl.deleteBoard
);

router.put(
  "/:boardId",
  authenticate,
  isValidId("boardId"),
  isReqObject,
  validateBody(boardSchemas.editBoardSchema),
  ctrl.editBoard
);

router.patch(
  "/:boardId/active",
  authenticate,
  isValidId("boardId"),
  isReqObject,
  validateBody(boardSchemas.editActiveSchema),
  ctrl.updateActive
);

module.exports = router;

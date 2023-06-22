const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/boards");

const { authenticate, isValidId } = require("../../middlewares");

router.get("/", authenticate, ctrl.getBoards);

router.get("/:boardId", authenticate, isValidId, ctrl.getBoardById);

router.post("/", ctrl.addBoard);

router.delete("/:boardId", isValidId("boardId"), ctrl.deleteBoard);

router.patch("/:boardId", authenticate, isValidId, ctrl.editBoard);
router.get(
  "/:boardId/background",
  authenticate,
  isValidId,
  ctrl.getBoardBackgrounds
);

module.exports = router;

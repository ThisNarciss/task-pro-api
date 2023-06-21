const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/boards");

const { authenticate, isValidId } = require("../../middlewares");

router.get("/", authenticate, ctrl.getBoards);

router.get("/:boardId", authenticate, isValidId, ctrl.getBoardById);

router.post("/", authenticate, ctrl.addBoard);

router.delete("/:boardId", authenticate, isValidId, ctrl.deleteBoard);

router.patch("/:boardId", authenticate, isValidId, ctrl.editBoard);
router.patch("/:boardId", authenticate, isValidId, ctrl.editBoardBackground);

module.exports = router;

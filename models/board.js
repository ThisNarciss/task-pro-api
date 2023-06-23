const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");
const Joi = require("joi");

const boardSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Set name for board"],
    },
    background: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    active: {
      type: Boolean,
      default: false,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

boardSchema.post("save", handleMongooseError);

const Board = model("board", boardSchema);

const addBoardSchema = Joi.object({
  title: Joi.string().required(),
  background: Joi.string(),
  icon: Joi.string(),
  active: Joi.bool(),
});

const editBoardSchema = Joi.object({
  title: Joi.string(),
  background: Joi.string(),
  icon: Joi.string(),
});

const editActiveSchema = Joi.object({
  active: Joi.bool().required(),
});

const boardSchemas = {
  addBoardSchema,
  editBoardSchema,
  editActiveSchema,
};

module.exports = { Board, boardSchemas };

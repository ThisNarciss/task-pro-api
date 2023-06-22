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
});

const editBoardSchema = Joi.object({
  title: Joi.string(),
  background: Joi.string(),
  icon: Joi.string(),
});

module.exports = { Board, addBoardSchema, editBoardSchema };

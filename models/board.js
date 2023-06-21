const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");

const boardSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Set name for board"],
    },
    background: {
      type: String,
    },
    icon: {
      type: String,
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

module.exports = Board;

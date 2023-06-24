const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");
const Joi = require("joi");

const columnSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Set name for column"],
    },

    board: {
      type: Schema.Types.ObjectId,
      ref: "board",
    },
  },
  { versionKey: false, timestamps: true }
);

columnSchema.post("save", handleMongooseError);

const Column = model("column", columnSchema);

const addColumnJoiSchema = Joi.object({
  title: Joi.string().trim().required(),
  board: Joi.string().required(),
});

const editColumnJoiSchema = Joi.object({
  title: Joi.string().trim(),
});

const columnJoiSchemas = {
  addColumnJoiSchema,
  editColumnJoiSchema,
};

module.exports = { Column, columnJoiSchemas };

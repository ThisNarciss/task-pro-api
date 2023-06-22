const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");
const Joi = require("joi");

const columnSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Set name for column"],
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "board",
    },
  },
  { versionKey: false, timestamps: true }
);

columnSchema.post("save", handleMongooseError);

const Column = model("column", columnSchema);

const columnJoiSchema = Joi.object({
  title: Joi.string().required(),
});

module.exports = { Column, columnJoiSchema };

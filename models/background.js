const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");

const backgroundSchema = new Schema(
  {
    backgrounds: {
      type: Array,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

backgroundSchema.post("save", handleMongooseError);

const Background = model("background", backgroundSchema);

module.exports = Background;

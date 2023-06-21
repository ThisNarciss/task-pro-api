const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Set title for task"],
    },

    description: {
      type: String,
      required: [true, "Set description for task"],
    },
    priority: {
      type: String,
      enum: ["without priority", "low", "medium", "high"],
      required: [true, "Set priority for task"],
      default: "without priority",
    },
    deadline: {
      type: Date,
      required: [true, "Set deadline for task"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "column",
    },
  },
  { versionKey: false, timestamps: true }
);

taskSchema.post("save", handleMongooseError);

const Task = model("task", taskSchema);

module.exports = Task;

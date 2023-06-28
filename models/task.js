const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");
const Joi = require("joi");

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Set title for task"],
    },

    description: {
      type: String,
      default: "",
    },
    priority: {
      type: String,
      enum: ["without priority", "low", "medium", "high"],
      default: "without priority",
    },
    deadline: {
      type: String,
      required: [true, "Set deadline for task"],
    },
    column: {
      type: Schema.Types.ObjectId,
      ref: "column",
      required: [true, "Set column for task"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "Set owner for task"],
    },
    index: {
      type: Number,
      required: [true, "Set task index"],
    },
  },
  { versionKey: false, timestamps: true }
);

taskSchema.post("save", handleMongooseError);

const Task = model("task", taskSchema);

const addTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
  priority: Joi.string(),
  deadline: Joi.string().required(),
  column: Joi.string().required(),
  index: Joi.number().required(),
});

const editTaskSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  priority: Joi.string(),
  deadline: Joi.string(),
});

const changeTaskColumn = Joi.object({
  column: Joi.string().required(),
  index: Joi.number().required(),
});

const taskSchemas = { addTaskSchema, editTaskSchema, changeTaskColumn };

module.exports = { Task, taskSchemas };

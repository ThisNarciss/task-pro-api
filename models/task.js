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
      type: Date,
      required: [true, "Set deadline for task"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "column",
      required: [true, "Set owner for task"],
    },
  },
  { versionKey: false, timestamps: true }
);

taskSchema.post("save", handleMongooseError);

const Task = model("task", taskSchema);

const addTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
  priority: Joi.string().required(),
  deadline: Joi.date().required(),
  owner: Joi.string().required(),
});

const editTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
  priority: Joi.string().required(),
  deadline: Joi.date().required(),
});

const changeTaskOwner = Joi.object({
  owner: Joi.string().required(),
});

const taskSchemas = { addTaskSchema, editTaskSchema, changeTaskOwner };

module.exports = { Task, taskSchemas };

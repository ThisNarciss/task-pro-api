const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");
const Joi = require("joi");

const userSchema = new Schema(
  {
    name: {
      type: String,
      minLength: 2,
      required: [true, "Set name for user"],
    },
    password: {
      type: String,
      minLength: 6,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    token: String,
    avatarUrl: {
      type: String,
      default: "https://i.ibb.co/7VFWmkN/user2x-min.png",
    },
    theme: {
      type: String,
      enum: ["dark", "light", "violet"],
      default: "dark",
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

const registerSchema = Joi.object({
  name: Joi.string().trim().min(2).required(),
  email: Joi.string().email().trim().lowercase().required(),
  password: Joi.string().min(8).max(64).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().lowercase().trim().required(),
  password: Joi.string().required(),
});

const profileSchema = Joi.object({
  name: Joi.string().trim().min(2),
  email: Joi.string().email().lowercase().trim(),
  password: Joi.string().min(6),
  avatar: Joi.string(),
});
const themeSchema = Joi.object({
  theme: Joi.string().valid("dark", "light", "violet"),
});
const userSchemas = { registerSchema, loginSchema, profileSchema, themeSchema };
module.exports = { User, userSchemas };

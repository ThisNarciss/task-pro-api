const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");

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
    avatarUrl: String,
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = User;

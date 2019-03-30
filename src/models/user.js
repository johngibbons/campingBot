const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "can't be blank"],
      index: true,
      unique: true
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "can't be blank"],
      index: true,
      unique: true
    },
    avatar: {
      type: String
    },
    password: {
      type: String,
      trim: true,
      required: [true, "can't be blank"]
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = model('Users', UserSchema);

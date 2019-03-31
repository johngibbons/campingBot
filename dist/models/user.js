"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = new _mongoose.default.Schema({
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
}, {
  timestamps: true
});

var _default = _mongoose.default.model('Users', UserSchema);

exports.default = _default;
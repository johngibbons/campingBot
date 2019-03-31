"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CampsiteFinderSchema = new _mongoose.default.Schema({
  campgroundId: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'Campgrounds'
  },
  userId: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'Users'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isWeekendsOnly: {
    type: Boolean,
    default: true
  },
  isSendingEmails: {
    type: Boolean,
    default: false
  },
  emailAddresses: [String],
  datesAvailable: [{}],
  dateOption: {
    type: String,
    enum: ['NEXT_SIX_MONTHS', 'SPECIFIC_DATES'],
    default: 'NEXT_SIX_MONTHS'
  },
  siteCode: {
    type: String
  },
  startDate: {
    type: Date,
    default: null
  },
  endDate: {
    type: Date,
    default: null
  },
  lastCheckedAt: {
    type: Date
  }
}, {
  timestamps: true
});

var _default = _mongoose.default.model('CampsiteFinders', CampsiteFinderSchema);

exports.default = _default;
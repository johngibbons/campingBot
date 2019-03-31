"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CampgroundSchema = new _mongoose.default.Schema({
  agencyIcon: {
    type: String
  },
  agencyName: {
    type: String
  },
  contractCode: {
    type: String
  },
  contractType: {
    type: String
  },
  facilityCategory: {
    type: String
  },
  facilityId: {
    type: String
  },
  facilityName: {
    type: String
  },
  facilityPhoto: {
    type: String
  },
  latitude: {
    type: String
  },
  longitude: {
    type: String
  },
  placeId: {
    type: Number
  },
  placeName: {
    type: String
  },
  placeUrl: {
    type: String
  },
  placeDescription: {
    type: String
  },
  placePhoto: {
    type: String
  },
  regionName: {
    type: String
  },
  reservationAgency: {
    type: String
  },
  shortName: {
    type: String
  },
  state: {
    type: String
  },
  url: {
    type: String
  }
}, {
  timestamps: true
});
CampgroundSchema.index({
  facilityName: 'text'
});

var _default = _mongoose.default.model('Campgrounds', CampgroundSchema);

exports.default = _default;
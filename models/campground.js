const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CampgroundSchema = new Schema({
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
  shortName: {
    type: String
  },
  state: {
    type: String
  },
  url: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

CampgroundSchema.index({ facilityName: 'text' })
CampgroundSchema.pre('update', function () {
  this.update({}, { $set: { updatedAt: new Date() } })
})

module.exports = mongoose.model('Campgrounds', CampgroundSchema)

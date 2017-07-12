const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CampgroundSchema = new Schema({
  agencyIcon: {
    type: String
  },
  agencyName: {
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
  regionName: {
    type: String
  },
  shortName: {
    type: String
  },
  state: {
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

module.exports = mongoose.model('Campgrounds', CampgroundSchema)

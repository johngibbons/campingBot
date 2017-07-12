const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CampsiteFinderSchema = new Schema({
  campgroundId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Campgrounds'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isWeekendsOnly: {
    type: Boolean,
    default: true
  },
  dateOption: {
    type: String,
    enum: ['NEXT_SIX_MONTHS', 'SPECIFIC_DATES'],
    default: 'NEXT_SIX_MONTHS'
  },
  startDate: {
    type: Date,
    default: null
  },
  endDate: {
    type: Date,
    default: null
  }
})

module.exports = mongoose.model('CampsiteFinders', CampsiteFinderSchema)

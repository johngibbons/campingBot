'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CampgroundSchema = new Schema({
  name: {
    type: String,
    Required: 'Campground name'
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
    type: [
      {
        type: String,
        enum: ['NEXT_SIX_MONTHS', 'SPECIFIC_DATES']
      }
    ],
    default: ['NEXT_SIX_MONTHS']
  }
})

const db = require('./db')
const ObjectID = require('mongodb').ObjectID

const campgrounds = db.get().collection('campgrounds')

exports.addCampground = (url, sites) =>
  campgrounds.insertOne({ url, sites, paused: false })

exports.pauseCampground = _id =>
  campgrounds.update({ _id: ObjectID(_id) }, { $set: { paused: true } })

exports.startCampground = _id =>
  campgrounds.update({ _id: ObjectID(_id) }, { $set: { paused: false } })

exports.removeCampground = _id => campgrounds.remove({ _id: ObjectID(_id) })

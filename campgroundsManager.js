const db = require('./db')
const ObjectID = require('mongodb').ObjectID

const campgrounds = db.get().collection('campgrounds')

exports.addCampground = (url, sites) => campgrounds
  .insertOne({ url, sites, paused: false })

exports.pauseCampground = (_id) =>
  campgrounds.update({ _id: ObjectID(_id) }, { $set: { paused: true } })

exports.startCampground = (_id) =>
  campgrounds.update({ _id: ObjectID(_id) }, { $set: { paused: false } })

exports.removeCampground = (_id) =>
  campgrounds.remove({ _id: ObjectID(_id) })

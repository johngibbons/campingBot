const CampsiteFinder = require('../models/campsite-finder')
const Campground = require('../models/campground')
const { Observable } = require('rx')
const fs = require('fs')
const xml2js = require('xml2js')
const parser = new xml2js.Parser()
const path = require('path')
const { curry, reduce, assoc, keys } = require('ramda')

module.exports = reset => {
  const renameKeys = curry((keysMap, obj) =>
    reduce(
      (acc, key) => assoc(keysMap[key] || key, obj[key], acc),
      {},
      keys(obj)
    )
  )

  const keysMap = {
    facilityID: 'facilityId',
    faciltyPhoto: 'facilityPhoto',
    contractID: 'contractCode'
  }
  const mapToDb = r => renameKeys(keysMap, r.$)

  const readFile = Observable.fromNodeCallback(fs.readFile)
  const parseString = Observable.fromNodeCallback(parser.parseString)
  const insertMany = data => Observable.fromPromise(Campground.insertMany(data))

  const count = Observable.fromPromise(Campground.count())
  if (reset) {
    const parse = count
      .filter(c => c === 0)
      .flatMap(() => readFile(path.resolve('data/allCampgrounds.xml'), 'utf8'))
      .flatMap(data => parseString(data))
      .map(data => data.resultset.result.map(mapToDb))
      .flatMap(data => insertMany(data))

    CampsiteFinder.remove({})
      .then(() => console.log('successfully deleted finders'))
      .catch(err => console.log('Error deleting finders:', err))
    Campground.remove({})
      .then(() => {
        parse.subscribe(
          () => console.log('success!'),
          err => console.log('error', err),
          () => console.log('completed')
        )
      })
      .catch(err => console.log('Error deleting campgrounds:', err))
  }
}

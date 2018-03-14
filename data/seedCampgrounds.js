const Campground = require('../models/campground')
const { Observable } = require('rx')
const fs = require('fs')
const xml2js = require('xml2js')
const parser = new xml2js.Parser()
const path = require('path')
const { curry, reduce, assoc, keys, pipe } = require('ramda')
const { RESERVE_AMERICA } = require('../constants')

const renameKeys = curry((keysMap, obj) =>
  reduce((acc, key) => assoc(keysMap[key] || key, obj[key], acc), {}, keys(obj))
)

const keysMap = {
  facilityID: 'facilityId',
  faciltyPhoto: 'facilityPhoto',
  contractID: 'contractCode'
}

const mapToDb = r => pipe(renameKeys(keysMap), addAgency)(r.$)
const addAgency = obj =>
  Object.assign({}, obj, { reservationAgency: RESERVE_AMERICA })
const readFile = Observable.fromNodeCallback(fs.readFile)
const parseString = Observable.fromNodeCallback(parser.parseString)
const insertMany = data => Observable.fromPromise(Campground.insertMany(data))
const count = Observable.fromPromise(Campground.count())
const seedCampgrounds$ = count
  .flatMap(() => readFile(path.resolve('data/allCampgrounds.xml'), 'utf8'))
  .flatMap(data => parseString(data))
  .map(data => data.resultset.result.map(mapToDb))
  .flatMap(data => insertMany(data))
  .do(console.log)
  .finally(() => {
    Campground.count({ reservationAgency: RESERVE_AMERICA }).then(count =>
      console.log(`done seeding ${count} American campgrounds`)
    )
  })

module.exports = seedCampgrounds$

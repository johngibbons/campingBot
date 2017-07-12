const express = require('express')
const app = express()
const url = 'mongodb://localhost:27017/campingReserver'
const bodyParser = require('body-parser')
require('./models/campsite-finder')
const Campground = require('./models/campground')
const scrapeCampgrounds = require('./index')
const cors = require('cors')
const mongoose = require('mongoose')
const { Observable } = require('rx')
const fs = require('fs')
const xml2js = require('xml2js')
const parser = new xml2js.Parser()
const path = require('path')

app.set('port', process.env.PORT || 8080)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
mongoose.Promise = global.Promise
mongoose.connect(url, { useMongoClient: true })

const campsiteFinderRoutes = require('./routes/campsiteFinderRoutes')
const campgroundRoutes = require('./routes/campgroundRoutes')

campsiteFinderRoutes(app)
campgroundRoutes(app)

app.listen(app.get('port'), function () {
  console.log('app listening on port', app.get('port'))
})

const readFile = Observable.fromNodeCallback(fs.readFile)
const parseString = Observable.fromNodeCallback(parser.parseString)
const insertMany = data => Observable.fromPromise(Campground.insertMany(data))

const count = Observable.fromPromise(Campground.count())
const parse = count
  .filter(c => c === 0)
  .flatMap(() => readFile(path.resolve('allCampgrounds.xml'), 'utf8'))
  .flatMap(data => parseString(data))
  .flatMap(data => insertMany(data.resultset.result.map(r => r.$)))

parse.subscribe(
  () => console.log('success!'),
  err => console.log('error', err),
  () => console.log('completed')
)

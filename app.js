require('dotenv').config()
require('newrelic')
const express = require('express')
const app = express()
const url = process.env.MONGODB_URI
const bodyParser = require('body-parser')
const campsiteScraper = require('./jobs/campsiteScraper')
const cors = require('cors')
const mongoose = require('mongoose')
const seedCampgrounds = require('./data/seedCampgrounds')

app.set('port', process.env.PORT || 8080)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
mongoose.Promise = global.Promise
mongoose.connect(url, { useMongoClient: true })
campsiteScraper()

const campsiteFinderRoutes = require('./routes/campsiteFinderRoutes')
const campgroundRoutes = require('./routes/campgroundRoutes')

campsiteFinderRoutes(app)
campgroundRoutes(app)

app.listen(app.get('port'), function () {
  console.log('app listening on port', app.get('port'))
})

seedCampgrounds()

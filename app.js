const express = require('express')
const app = express()
const url = 'mongodb://localhost:27017/campingReserver'
const db = require('./db')
const bodyParser = require('body-parser')
const scrapeCampgrounds = require('./index')

app.set('port', (process.env.PORT || 3000))
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
  const campgrounds = await db
    .get()
    .collection('campgrounds')
    .find()
    .toArray()
  // console.log(campgrounds)
  res.render('index', { campgrounds })
})

app.post('/campgrounds', (req, res) => {
  const { addCampground } = require('./campgroundsManager')
  addCampground(req.body.url, req.body.sites)
  res.redirect('/')
})

app.post('/campgrounds/:id', (req, res) => {
  const { startCampground, pauseCampground } = require('./campgroundsManager')
  req.body.pause
    ? pauseCampground(req.params.id)
    : startCampground(req.params.id)
  res.redirect('/')
})

app.post('/campgrounds/:id/delete', (req, res) => {
  const { removeCampground } = require('./campgroundsManager')
  removeCampground(req.params.id)
  res.redirect('/')
})

app.get('*', function (req, res) {
  res.redirect('/')
})

db.connect(url, (err) => {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
    app.listen(app.get('port'), function () {
      console.log('Node app is running on port', app.get('port'))
    })
    scrapeCampgrounds()
  }
})

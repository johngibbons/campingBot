const CampsiteFinder = require('./models/campsite-finder')
const moment = require('moment')
const getUrl = require('./external/getUrl')
const setDates = require('./setDates')
const { Observable } = require('rx')

module.exports = () => {
  const allCampsiteFinders$ = Observable.fromPromise(
    CampsiteFinder.find({ isActive: true }).populate('campgroundId')
  ).mergeMap(Observable.from)

  const setUrl$ = campsiteFinder =>
    Observable.fromPromise(getUrl(campsiteFinder))

  const setDates$ = campsiteFinder =>
    Observable.fromPromise(setDates(campsiteFinder)).mergeMap(Observable.from)

  const timer = Observable.timer(0, 5000)
    .do(() =>
      console.log(
        'Sequence ran at:',
        moment().format('MMMM Do YYYY, h:mm:ss a')
      )
    )
    .mergeMap(allCampsiteFinders$)
    .mergeMap(setUrl$)
    .mergeMap(setDates$)
    .do(console.log)

  timer.subscribe(() => console.log('timer ran'))
}

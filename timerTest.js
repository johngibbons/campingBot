const CampsiteFinder = require('./models/campsite-finder')
const moment = require('moment')
const getUrl = require('./external/getUrl')
const setDates = require('./setDates')
const postSearch = require('./external/postSearch')
const parse = require('./parser')
const { Observable } = require('rx')
const sendEmails = require('./mailers/mailer')

module.exports = () => {
  const allCampsiteFinders$ = Observable.fromPromise(
    CampsiteFinder.find({ isActive: true }).populate('campgroundId')
  ).mergeMap(Observable.from)

  const setUrl$ = campsiteFinder =>
    Observable.fromPromise(getUrl(campsiteFinder))

  const setDates$ = campsiteFinder => Observable.from(setDates(campsiteFinder))

  const postSearch$ = campsiteFinderObj => {
    return Observable.fromPromise(postSearch(campsiteFinderObj))
  }

  const groupResult$ = group =>
    group.reduce(
      (
        acc,
        [
          {
            campingDate,
            emailAddresses,
            isSendingEmails,
            lengthOfStay,
            campgroundId: { facilityName, url }
          },
          result
        ]
      ) => {
        const resultObj = {
          siteCount: result,
          date: campingDate
        }
        return Object.assign({}, acc, {
          campground: facilityName,
          emailAddresses: emailAddresses,
          isSendingEmails: isSendingEmails,
          lengthOfStay: lengthOfStay,
          url: url,
          results: acc.results ? [...acc.results, resultObj] : []
        })
      },
      {}
    )

  const groupByEmail = result =>
    result.reduce((acc, curr) => {
      if (!curr.isSendingEmails) return acc
      const emailAddresses = curr.emailAddresses
      emailAddresses.forEach(e => {
        if (acc[e]) {
          acc[e].push(curr)
        } else {
          acc[e] = [curr]
        }
      })
      return acc
    }, {})

  const sentence = ([search, result]) =>
    `There are ${result} spots available at ${search.campgroundId
      .facilityName} on ${search.campingDate}`

  const campsiteFinderSearches$ = allCampsiteFinders$
    .do(() => console.time('test'))
    .do(() =>
      console.log(
        'Sequence starting at:',
        moment().format('MMMM Do YYYY, h:mm:ss a')
      )
    )
    .concatMap(setUrl$)
    .concatMap(setDates$)

  const searchResults$ = campsiteFinderSearches$
    .map(value => Observable.just(value).delay(1000))
    .concatAll()
    .concatMap(postSearch$)
    .map(parse)
    .do(console.log)

  const searchWithResults$ = Observable.zip(
    campsiteFinderSearches$,
    searchResults$
  )
    .filter(([search, result]) => result > 0)
    .do(x => console.log(sentence(x)))

  const groupedResults$ = searchWithResults$
    .groupBy(([search, result]) => search.campgroundId.facilityId)
    .mergeMap(groupResult$)
    .reduce((acc, curr) => [...acc, curr], [])
    .repeat()

  groupedResults$.subscribe(
    result => {
      console.log('RESULT', groupByEmail(result))
      sendEmails(groupByEmail(result))
      console.log(
        'Sequence ended at:',
        moment().format('MMMM Do YYYY, h:mm:ss a')
      )
      console.timeEnd('test')
    },
    console.log,
    () => {
      console.log('ended somehow')
    }
  )
}

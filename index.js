const rx = require('rx')
const eachLimit = require('async/eachLimit')
const parseSites = require('./parser')
const generateDates = require('./datesGenerator')
const CampsiteFinder = require('./models/campsite-finder')

const campsiteFinders = CampsiteFinder.find({ isActive: true })

const source = rx.Observable.create(async observer => {
  const dates = generateDates()
  const campgrounds = await db
    .get()
    .collection('campgrounds')
    .find({ paused: false })
    .toArray()
  return eachLimit(
    campgrounds,
    3,
    ({ url, sites, parkId }, cb) => {
      return eachLimit(
        dates,
        5,
        (date, cb2) => {
          let request = require('request-promise-native')
          const jar = request.jar()
          const headers = {
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
          }
          request = request.defaults({
            jar,
            headers,
            followRedirect: true,
            resolveWithFullResponse: true
          })

          console.log(url)
          const postOptions = {
            method: 'POST',
            uri: url,
            form: {
              contractCode: 'CA',
              parkId: parkId,
              siteTypeFilter: 'ALL',
              submitSiteForm: true,
              search: 'site',
              campingDate: date,
              lengthOfStay: 2,
              currentMaximumWindow: 12,
              contractDefaultMaxWindow:
                'MS:24,LT:18,GA:24,SC:13,PA:24,LARC:24,CTLN:13',
              stateDefaultMaxWindow: 'MS:24,GA:24,SC:13,PA:24,CO:24,CA:13',
              defaultMaximumWindow: 12,
              siteCode: sites
            }
          }

          const getOptions = {
            url,
            method: 'GET'
          }

          request(getOptions)
            .then(() => request(postOptions))
            .then(response => parseSites(response))
            .then(() => cb2())
            .catch(err => console.log(err))
        },
        () => {
          return cb()
        }
      )
    },
    () => {
      return observer.onCompleted()
    }
  )
})
const repeatSearch = source.repeat()

module.exports = () =>
  repeatSearch.subscribe(() => {
    console.log('running')
  })

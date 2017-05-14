const scrapeIt = require('scrape-it')
const rx = require('rx')

const Nightmare = require('./nightmare')
const nightmare = Nightmare()
const eachSeries = require('async/eachSeries')

const fridays = (function () {
  const fridayNum = 5
  const date = new Date()
  const diff = date.getDay() - fridayNum
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' }
  const fridaysArray = []
  let first = true
  while (date < new Date().setMonth(new Date().getMonth() + 6)) {
    if (first) {
      var friday = diff > 0
        ? date.setDate(date.getDate() + 6)
        : date.setDate(date.getDate() + ((-1) * diff))
    } else {
      var friday = date.setDate(date.getDate() + 7)
    }
    first = false
    fridaysArray.push(new Date(friday).toLocaleDateString('en-US', options))
  }
  return fridaysArray
})()

const campgrounds = [
  {
    url: 'https://www.reserveamerica.com/camping/angel-island-sp/r/campgroundDetails.do?contractCode=CA&parkId=120003',
    sites: '001, 002, 003, 004, 005, 006, 007, 008, 009'
  },
  {
    url: 'https://www.reserveamerica.com/camping/big-basin-redwoods-sp/r/campgroundDetails.do?contractCode=CA&parkId=120009'
  }
]

console.time('timer')
const source = rx.Observable.create((observer) => {
  return eachSeries(campgrounds, ({ url, sites }, cb) => {
    return eachSeries(fridays, (friday, cb2) => {
      nightmare
        .goto(url)
        .type('#lengthOfStay', null)
        .type('#lengthOfStay', 2)
        .type('#campingDate', null)
        .type('#campingDate', friday)
        .type('#siteCode', null)
        .type('#siteCode', sites)
        .click('#search_avail')
        .wait(1000)
        .ewait('did-finish-load')
        .evaluate(function () {
          return document.body.innerHTML
        })
        .then((result) => {
          const data = scrapeIt
            .scrapeHTML(result, {
              campsites: {
                listItem: '#shoppingitems tr',
                data: {
                  availIcon: '.sitemarker',
                  unavailIcon: '.sitemarker.unavail',
                  adaIcon: {
                    selector: 'img[alt="Accessible"]',
                    attr: 'src'
                  }
                }
              }
            })
          const available = data
            .campsites
            .filter(site => site.availIcon && !site.unavailIcon && !site.adaIcon)
          console.log(url)
          console.log(friday)
          console.log(available)
          console.log('done')
          cb2()
        })
        .catch(function (error) {
          console.error('Search failed:', error)
        })
    }, () => cb())
  }, () => {
    console.timeEnd('timer')
    return observer.onCompleted()
  })
})
const repeatSearch = source.repeat()

repeatSearch.subscribe(() => {
  console.log('running')
})

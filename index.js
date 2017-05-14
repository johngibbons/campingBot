const scrapeIt = require('scrape-it')
const rx = require('rx')

const Browser = require('zombie')
const eachSeries = require('async/eachSeries')
const each = require('async/each')

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

const source = rx.Observable.create((observer) => {
  const browser = new Browser()
  return eachSeries(campgrounds, ({ url, sites }, cb) => {
    return eachSeries(fridays, (friday, cb2) => {
      browser
        .visit(url, () => {
          browser.fill('#lengthOfStay', null)
          browser.fill('#lengthOfStay', 2)
          browser.fill('#campingDate', null)
          browser.fill('#campingDate', friday)
          browser.fill('#siteCode', null)
          browser.fill('#siteCode', sites)
          browser.pressButton('#search_avail', () => {
            const data = scrapeIt
              .scrapeHTML(browser.html(), {
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
        })
    }, () => {
      return cb()
    })
  }, () => {
    return observer.onCompleted()
  })
})
const repeatSearch = source.repeat()

repeatSearch.subscribe(() => {
  console.log('running')
})

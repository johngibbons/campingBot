const scrapeIt = require('scrape-it')
const rx = require('rx')
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
    fridaysArray.push(new Date(friday).toDateString())
  }
  return fridaysArray
})()

const campgrounds = [
  {
    url: 'https://www.reserveamerica.com/camping/angel-island-sp/r/campgroundDetails.do?contractCode=CA&parkId=120003',
    sites: '001, 002, 003, 004, 005, 006, 007, 008, 009',
    parkId: 120003
  },
  {
    url: 'https://www.reserveamerica.com/camping/big-basin-redwoods-sp/r/campgroundDetails.do?contractCode=CA&parkId=120009',
    parkId: 120003
  }
]

const source = rx.Observable.create((observer) => {
  return each(campgrounds, ({ url, sites, parkId }, cb) => {
    return each(fridays, (fri, cb2) => {
      let request = require('request-promise-native')
      const jar = request.jar()
      const headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
      }
      request = request.defaults({ jar, headers, followRedirect: true, resolveWithFullResponse: true })

      const postOptions = {
        method: 'POST',
        uri: url,
        form: {
          contractCode: 'CA',
          parkId: parkId,
          siteTypeFilter: 'ALL',
          submitSiteForm: true,
          search: 'site',
          campingDate: fri,
          lengthOfStay: 2,
          currentMaximumWindow: 12,
          contractDefaultMaxWindow: 'MS:24,LT:18,GA:24,SC:13,PA:24,LARC:24,CTLN:13',
          stateDefaultMaxWindow: 'MS:24,GA:24,SC:13,PA:24,CO:24,CA:13',
          defaultMaximumWindow: 12,
          siteCode: sites
        }
      }

      const getOptions = {
        url,
        method: 'GET'
      }

      request(getOptions).then(() => {
        request(postOptions).then(response => {
          const data = scrapeIt.scrapeHTML(response.body, {
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
          console.log(fri)
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

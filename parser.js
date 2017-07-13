const scrapeIt = require('scrape-it')

module.exports = response => {
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
  const avail = data.campsites.filter(
    site => site.availIcon && !site.unavailIcon && !site.adaIcon
  )
  console.log(avail)
  return avail.length
}

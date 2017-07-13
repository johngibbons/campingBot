const scrapeIt = require('scrape-it')

module.exports = response => {
  const data = scrapeIt.scrapeHTML(response.body, {
    campsites: {
      listItem: '#shoppingitems tr',
      data: {
        availIcon: '.sitemarker',
        unavailIcon: '.sitemarker.unavail',
        bookNowButton: '.book.now',
        adaIcon: {
          selector: 'img[alt="Accessible"]',
          attr: 'src'
        }
      }
    }
  })

  const avail = data.campsites.filter(
    ({ availIcon, unavailIcon, bookNowButton, adaIcon }) => {
      return bookNowButton && availIcon && !unavailIcon && !adaIcon
    }
  )

  return avail.length
}

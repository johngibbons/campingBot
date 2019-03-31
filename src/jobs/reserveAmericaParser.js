import scrapeIt from 'scrape-it';

export default response => {
  if (!response) return 0;
  const data = scrapeIt.scrapeHTML(response.body, {
    campsites: {
      listItem: '#shoppingitems tr',
      data: {
        availIcon: '.sitemarker',
        unavailIcon: '.sitemarker.unavail',
        bookNowButton: '.book.now',
        bookNext: '.next',
        adaIcon: {
          selector: 'img[alt="Accessible"]',
          attr: 'src'
        }
      }
    }
  });

  const avail = data.campsites.filter(
    ({ availIcon, unavailIcon, bookNowButton, adaIcon, bookNext }) => {
      return (
        !!bookNowButton && !!availIcon && !unavailIcon && !adaIcon && !bookNext
      );
    }
  );

  return avail.length;
};

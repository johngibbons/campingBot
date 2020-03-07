const puppeteer = require('puppeteer');
const moment = require('moment');
const { formatted } = require('../jobs/datesGenerator');

module.exports = async function headlessScraper(campsiteFinder) {
  const {
    campgroundId: { placeId, facilityId, placeName },
    allDates
  } = campsiteFinder;
  console.log('HEADLESS', process.env.HEADLESS);
  const headless = process.env.HEADLESS !== 'false';
  console.log('headless', headless);
  const slowMo = Number(process.env.SLOWMO) || 0;
  console.log('slowMo', slowMo);
  const width = 1920;
  const height = 900;
  const browser = await puppeteer.launch({
    headless,
    slowMo,
    args: ['--no-sandbox'], // required for heroku
    defaultViewport: { width, height, deviceScaleFactor: 1 }
  });

  try {
    const page = await browser.newPage();
    await page.setUserAgent(
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
    );
    await page.setRequestInterception(true);
    page.on('request', interceptedRequest => {
      const reqUrl = interceptedRequest.url();
      const stringsRegex = /(?:cali-content2?\.usedirect\.com\/(?:[Ii]mages|(?:Common)?[Tt]hemes)|bam\.nr-data\.net|gstatic|google\.com\/recaptcha|google-analytics\.com|apis\.google\.com|bootstrapcdn|AdvanceMapImageGenerator)/;

      if (stringsRegex.test(reqUrl)) {
        interceptedRequest.abort();
      } else {
        interceptedRequest.continue();
      }
    });

    const url =
      'https://www.reservecalifornia.com/CaliforniaWebHome/Default.aspx';
    await page.goto(url, { waitUntil: 'networkidle2' });
    await page.type('#txtSearchparkautocomplete', placeName);

    await page.waitFor(1000);
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    await page.waitForSelector('#mainContent_txtArrivalDate');
    await page.click('#mainContent_txtArrivalDate');
    await page.waitFor(500);
    await page.click('.ui-datepicker-close');
    await page.type(
      '#mainContent_txtArrivalDate',
      moment()
        .add(1, 'days')
        .format('L')
    );

    await page.select('#ddlHomeNights', '1');

    await page.waitFor(500);
    await page.click('.home_btn_go > a');
    await page.waitForNavigation({ waitUntil: 'networkidle0' });

    // eslint-disable-next-line no-shadow, no-undef
    await Promise.all([
      page.evaluate(
        ({ facilityId, placeId }) => fnGotoUnitlevelRDR(facilityId, placeId),
        {
          facilityId,
          placeId
        }
      ),
      page.waitFor(2000)
      // this.page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);
    // eslint-disable-next-line no-undef
    await page.evaluate(() => fnUnitgridChangeLargesize());
    // this.page.click('#aUnitLarge');
    await page.waitFor(1000);

    let lastDate = null;
    const availableDatesBySiteId = {};
    while (true) {
      const startDate = await page.evaluate(
        // eslint-disable-next-line no-undef
        () => document.querySelectorAll('#mainContent_txtDateRange')[0].value
      );
      if (startDate === lastDate) {
        break;
      }
      lastDate = startDate;
      const currentAvailabilities = await page.evaluate(() =>
        [...document.querySelectorAll('.blue_brd_box')].reduce(
          (avails, elem) => {
            const onclick = elem.getAttribute('onclick');
            const onclickRegex = /showPopWindowAdvanceSearchRDR\(.*\'([\d]+)\'(?:\s|\'|\,)+(\d+\/\d+\/\d+)/;
            const [_, siteId, date] = onclick.match(onclickRegex);
            const siteAvailabilities = avails[siteId] || [];
            avails[siteId] = [...siteAvailabilities, date];
            return avails;
          },
          {}
        )
      );

      Object.keys(currentAvailabilities).forEach(siteId => {
        const allAvailabilitiesForSite = availableDatesBySiteId[siteId] || [];
        availableDatesBySiteId[siteId] = [
          ...allAvailabilitiesForSite,
          ...currentAvailabilities[siteId].map(date => formatted(date))
        ];
      });

      await page.evaluate(() => fnNextDaysRDR());
      await page.waitFor(1000);
    }
    const hasAllRequestedDates = (requested, available) =>
      requested.every(requestedDate => available.indexOf(requestedDate) > -1);

    const availabilities = allDates
      .map(requestedDatesArr => {
        const matchingUnits = Object.keys(availableDatesBySiteId).filter(
          siteId =>
            hasAllRequestedDates(
              requestedDatesArr,
              availableDatesBySiteId[siteId]
            )
        );

        return {
          date: requestedDatesArr[0],
          siteCount: matchingUnits.length,
          lengthOfStay: requestedDatesArr.length
        };
      })
      .filter(resultObj => resultObj.siteCount !== 0);

    return availabilities;
  } catch (error) {
    console.log('There was a scraping error:', error);
    throw new Error(error);
  } finally {
    await browser.close();
  }
};

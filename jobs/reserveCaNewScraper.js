const rp = require('request-promise-native');
const { arrOfDateEveryThirtyDaysBetween } = require('./datesGenerator');
const moment = require('moment');

module.exports = async function headlessScraper(campsiteFinder = {}) {
  const {
    campgroundId: { facilityId },
    allDates
  } = campsiteFinder;

  const headers = {
    'user-agent':
      'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.32 Safari/537.36'
  };
  const jar = rp.jar();
  const request = rp.defaults({
    jar,
    headers,
    simple: false,
    followRedirect: false,
    resolveWithFullResponse: true,
    time: true,
    timeout: 3000,
    forever: true,
    json: true
  });

  const response = await request(
    'https://calirdr.usedirect.com/rdr/rdr/search/grid',
    {
      method: 'POST',
      body: {
        FacilityId: facilityId,
        StartDate: allDates[0][0],
        EndDate: allDates[0][1]
      }
    }
  );

  // console.log('Facility', response.body.Facility);

  const unitsMap = Object.keys(response.body.Facility.Units).reduce(
    (acc, unitKey) => ({ ...acc, [unitKey]: [] }),
    {}
  );

  const startDate = response.body.Facility.Restrictions.FutureBookingStarts;
  const endDate = response.body.Facility.Restrictions.FutureBookingEnds;

  const arrOfStartDates = arrOfDateEveryThirtyDaysBetween(startDate, endDate);
  const lastDate = arrOfStartDates[arrOfStartDates.length - 1];
  const formattedEndDate = moment(endDate).format('M-D-YYYY');

  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const currStartDate of arrOfStartDates) {
    console.log('CURRSTART', currStartDate);
    const currEndDate =
      currStartDate === lastDate
        ? formattedEndDate
        : arrOfStartDates[arrOfStartDates.indexOf(currStartDate) + 1];
    console.log('CURREND', currEndDate);
    await timeout(5000);
    const currResponse = await request(
      'https://calirdr.usedirect.com/rdr/rdr/search/grid',
      {
        method: 'POST',
        body: {
          FacilityId: facilityId,
          StartDate: currStartDate,
          EndDate: currEndDate
        }
      }
    );

    // console.log('Facility Second', currResponse.body.Facility);

    Object.entries(currResponse.body.Facility.Units || []).forEach(
      ([unitKey, unitValue]) => {
        const slices = unitValue.Slices;

        Object.entries(slices).forEach(([date, dateAvailability]) => {
          if (dateAvailability.IsFree) {
            unitsMap[unitKey].push(moment(date).format('M-D-YYYY'));
          }
        });
      }
    );
  }

  const hasAllRequestedDates = (requestedDatesArr, datesAvailableArr) =>
    requestedDatesArr.every(requestedDate =>
      datesAvailableArr.includes(requestedDate)
    );

  console.log('allDates', allDates);
  console.log('unitsMap', unitsMap);

  const availabilities = allDates
    .map(requestedDatesArr => {
      const matchingUnits = Object.values(unitsMap).filter(datesAvailableArr =>
        hasAllRequestedDates(requestedDatesArr, datesAvailableArr)
      );

      console.log('MATCHING_UNITS', matchingUnits);

      return {
        date: requestedDatesArr[0],
        siteCount: matchingUnits.length,
        lengthOfStay: requestedDatesArr.length
      };
    })
    .filter(resultsObj => resultsObj.siteCount !== 0);

  console.log('AVAILABILITIES', availabilities);

  return availabilities;

  // console.log(
  //  util.inspect(response2.body.Facility, {
  //    showHidden: false,
  //    depth: null,
  //    colors: true
  //  })
  // );
};

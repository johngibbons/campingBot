import rp from 'request-promise-native';
import cheerio from 'cheerio';
import moment from 'moment';
import { formatted } from '../jobs/datesGenerator';

const sleep = ms => new Promise(res => setTimeout(res, ms));

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
  timeout: 5000,
  forever: true,
  json: true
});

const sessionOptions = {
  url: 'https://www.reservecalifornia.com/CaliforniaWebHome/Default.aspx'
};

const searchOptions = (placeId, facilityId) => ({
  url:
    'https://www.reservecalifornia.com/CaliforniaWebHome/Facilities/AdvanceSearch.aspx',
  method: 'POST',
  body: {
    ctl01$AdvanceMainSearch$hdnArrivalDate: '03/14/2018',
    ctl01$AdvanceMainSearch$txtArrivalDate: '03/14/2018',
    ctl01$AdvanceMainSearch$hdnNights: 1,
    ctl01$AdvanceMainSearch$ddlNights: 1,
    ctl01$mainContent$hdnUnitTotalDay: 6,
    ctl01$mainContent$btngetFacilitiess: 'Hure',
    ctl01$mainContent$hdnCheckListDatalistmode: 1,
    ctl01$mainContent$Hidscreenresolution: 1280,
    ctl01$mainContent$hdnPlaceid: placeId,
    ctl01$mainContent$hdnPlaceFacilirySize: 'Medium',
    ctl01$mainContent$hdnFacilityid: facilityId,
    ctl01$mainContent$hdnFacilityType: 1,
    ctl01$mainContent$hdnNodeclick: 0,
    ctl01$mainContent$hiddenPlaceLevel: 'Facility',
    ctl01$mainContent$txtDateRange: '11/28/2017',
    ctl01$mainContent$Grid_ddlNights: 1,
    ctl01$mainContent$TopMenuMainSearch$ddlFacilityCategory: 1,
    ctl01$mainContent$TopMenuMainSearch$txtTopArrivalDate: '03/14/2018',
    ctl01$mainContent$TopMenuMainSearch$ddlTopNights: 1,
    ctl01$mainContent$TopMenuMainSearch$ddlSortBy: 3
  }
});

const gridOptions = (placeId, facilityId) => ({
  headers: {
    'content-type': 'application/json'
  },
  url:
    'https://www.reservecalifornia.com/CaliforniaWebHome/Facilities/AdvanceSearch.aspx/GetUnitGridDataHtmlString',
  method: 'POST',
  body: {
    FacilityId: facilityId,
    PlaceId: placeId,
    MaximumDates: '20',
    IsTablet: true,
    MaximumStayforGrid: 30
  }
});

const nextDateOptions = {
  headers: {
    'content-type': 'application/json'
  },
  url:
    'https://www.reservecalifornia.com/CaliforniaWebHome/Facilities/AdvanceSearch.aspx/GetNextDateUnitGrid',
  method: 'POST',
  body: {
    unitsizebool: true,
    unitclicsizechangevalue: true
  }
};

// UnitDetailPopup.aspx?facility_id=346
// \u0026amp;unit_id=4528
// \u0026amp;arrival_date=8/29/2017 12:00:00 AM
// \u0026amp;dis=8/29/2017 12:00:00 AM
// \u0026amp;is_available=true
// \u0026#39;,
// \u0026#39;4528
// \u0026#39;,
// \u0026#39;8/29/2017
// \u0026#39;,
// \u0026#39;0
// \u0026#39;,
// \u0026#39;0
// \u0026#39;
// );\"

const parseAvailable = ($, sites) => {
  // filter out ADA sites and walk ins
  const nonAdaOrWalkIn = sites
    .not(':has(.hendi_icn)')
    .not(':has(.green_brd_box)');

  const nestedMatches = nonAdaOrWalkIn
    .map((i, el) => {
      const matches = $(el)
        .children()
        .map((j, child) => $(child).attr('onclick'))
        .filter((j, str) => {
          return str.includes('is_available=true') && !str.includes('valign');
        })
        .toArray();
      return matches;
    })
    .toArray();
  return nestedMatches;
};

const getGridResults = async (placeId, facilityId, startDate, endDate) => {
  try {
    const gridResponse = await request(gridOptions(placeId, facilityId));
    if (!gridResponse.body.d) {
      console.log(
        'CA search did not return proper response, it was:',
        gridResponse.body
      );
    }
    const $ = cheerio.load(gridResponse.body.d);
    const sites = $('.unitdata');

    return {
      startDate,
      endDate,
      result: parseAvailable($, sites)
    };
  } catch (e) {
    console.log('error requesting grid options:', e);
    throw e;
  }
};

const searchNextRange = async (placeId, facilityId) => {
  try {
    const response = await request(nextDateOptions);
    const [startDate, endDate] = response.body.d.split(' - ');
    return getGridResults(placeId, facilityId, startDate, endDate);
  } catch (e) {
    console.log('error requesting next dates:', e);
    throw e;
  }
};

const hasAllRequestedDates = (requested, available) =>
  requested.every(requestedDate => available.indexOf(requestedDate) > -1);

const buildAvailabilitiesArray = async (placeId, facilityId, allDates) => {
  const { result: initialResult } = await getGridResults(placeId, facilityId);
  let lastDateChecked = moment();
  const availabilitiesArr = [];
  const lastDateToCheck = moment()
    .add(6, 'months')
    .day(-2);
  availabilitiesArr.push(...initialResult);

  while (lastDateChecked.isSameOrBefore(lastDateToCheck)) {
    const { startDate, endDate, result } = await searchNextRange(
      placeId,
      facilityId
    );
    availabilitiesArr.push(...result);

    console.log('--------------CYCLE------------------');
    console.log('startDate is:', startDate);
    console.log('endDate is:', endDate);
    console.log('lastDateChecked is:', lastDateChecked);

    if (!endDate) {
      throw new Error('No endDate');
    }

    if (endDate) {
      lastDateChecked = moment(endDate, 'M/D/Y');
    } else {
      await request(sessionOptions);
      await request(searchOptions(placeId, facilityId));
    }
    console.log('--------------END OF CYCLE------------------');
    sleep(1000);
  }
  console.log('lastDateToCheck', lastDateToCheck);

  return availabilitiesArr;
};

export default async ({ campgroundId: { placeId, facilityId }, allDates }) => {
  try {
    await request(sessionOptions);
  } catch (e) {
    console.log('error requesting session:', e);
    throw e;
  }
  try {
    await request(searchOptions(placeId, facilityId));
  } catch (e) {
    console.log('error requesting search:', e);
    throw e;
  }
  const availabilitiesArr = await buildAvailabilitiesArray(
    placeId,
    facilityId,
    allDates
  );

  const availableDatesByUnit = availabilitiesArr.reduce(
    (availabilities, availableSite) => {
      const unit = availableSite.match(/unit_id=(.*?)&/)[1];
      const date = availableSite.match(/arrival_date=(.*?)\s/)[1];
      const formattedDate = formatted(date);
      const unitDates = availabilities[unit];
      if (!unitDates) {
        // no previous availabilites on this unit, so add to availabilities obj
        return { ...availabilities, [unit]: [formattedDate] };
      } else if (unitDates.includes(formattedDate)) {
        // duplicate, just return obj
        return availabilities;
      }
      // previous availabilities already on this unit, add date to unit availabilities array
      return {
        ...availabilities,
        [unit]: [...availabilities[unit], formattedDate]
      };
    },
    {}
  );

  const availabilities = allDates
    .map(requestedDatesArr => {
      const matchingUnits = Object.keys(availableDatesByUnit).filter(unitId =>
        hasAllRequestedDates(requestedDatesArr, availableDatesByUnit[unitId])
      );

      return {
        date: requestedDatesArr[0],
        siteCount: matchingUnits.length,
        lengthOfStay: requestedDatesArr.length
      };
    })
    .filter(resultObj => resultObj.siteCount !== 0);

  return availabilities;
};
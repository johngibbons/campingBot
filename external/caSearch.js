const rp = require('request-promise-native');
const { formatted } = require('../jobs/datesGenerator');
const cheerio = require('cheerio');
const moment = require('moment');

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
    'https://www.reservecalifornia.com/CaliforniaWebHome/Facilities/AdvanceSearchm.aspx',
  method: 'POST',
  body: {
    ctl01$hdnLoginCaptchResponse: null,
    ctl01$Hidscreenresolutionmain: null,
    ctl01$hdnCulture: null,
    'g-recaptcha-response': null,
    ctl01$txtCaptcha: null,
    ctl01$AdvanceMainSearch$hdnAutoPlaceId: placeId,
    ctl01$AdvanceMainSearch$hdnLat: 37.17159,
    ctl01$AdvanceMainSearch$hdnLag: -122.22203,
    ctl01$AdvanceMainSearch$hdnautocomplete: null,
    ctl01$AdvanceMainSearch$hdncustomautocomplete: null,
    ctl01$AdvanceMainSearch$hdnArrivalDate: '5/28/2019',
    ctl01$AdvanceMainSearch$txtArrivalDate: '5/28/2019',
    ctl01$AdvanceMainSearch$hdnNights: 1,
    ctl01$AdvanceMainSearch$ddlNights: 1,
    ctl01$AdvanceMainSearch$hdnEnableGoogleAnalyticCodeTracing: null,
    ctl01$ctl11$indexValue: null,
    ctl01$ctl11$hidddlCategories: null,
    ctl01$ctl11$hidddlUnitType: null,
    ctl01$ctl11$hdnParkFinder: null,
    ctl01$ctl11$hdnSelectRentalType: null,
    ctl01$ctl11$hdnSelectCampingEquip: 0,
    ctl01$ctl11$hdnLeftUnitTypeName: null,
    ctl01$ctl11$hdnSelectedCategoryName: null,
    ctl01$ctl11$hdnSelectedRegionId: 0,
    ctl01$ctl11$hdnSelectedUnittypeId: null,
    ctl01$ctl11$hdnplaceid: null,
    ctl01$ctl11$hdnMultiSelect: null,
    ctl01$ctl11$hdnIsPremium: null,
    ctl01$ctl11$ddlCategories: null,
    ctl01$ctl11$ddlCampingUnit: 0,
    ctl01$ctl11$ddlLenght: 0,
    ctl01$mainContent$hdnUnitTotalDay: 6,
    ctl01$mainContent$hdnFilterSouth: null,
    ctl01$mainContent$hdnFilterNorth: null,
    ctl01$mainContent$hdnFilterEast: null,
    ctl01$mainContent$hdnFilterWest: null,
    ctl01$mainContent$hdnFilterCenterLat: null,
    ctl01$mainContent$hdnFilterCenterLong: null,
    ctl01$mainContent$hdnSearchType: null,
    ctl01$mainContent$btngetFacilitiess: 'Hure',
    ctl01$mainContent$hdndefaultLag: -122.22203,
    ctl01$mainContent$hdndefaultLat: 37.17159,
    ctl01$mainContent$hdnCheckListDatalistmode: 1,
    ctl01$mainContent$hdnWebConfigRadiusCheck: 0,
    ctl01$mainContent$hdnWebConfigRadiusValue: 150,
    ctl01$mainContent$Hidscreenresolution: 1280,
    ctl01$mainContent$hdnAllhideControl: null,
    ctl01$mainContent$hidddlUnitType: null,
    ctl01$mainContent$hdnPlaceid: placeId,
    ctl01$mainContent$hdnPlaceFacilirySize: 'Medium',
    ctl01$mainContent$hdnDDLPlaceId: null,
    ctl01$mainContent$hdnFacilityid: facilityId,
    ctl01$mainContent$hdnFacilityType: 1,
    ctl01$mainContent$hdnNodeclick: 0,
    ctl01$mainContent$hiddenPlaceLevel: 'Facility',
    ctl01$mainContent$hdnPlaceCategoryId: null,
    ctl01$mainContent$hdClient: null,
    ctl01$mainContent$hdnFav: null,
    ctl01$mainContent$hdnCheckAfterpostback: null,
    ctl01$mainContent$hiddenRPlaceLevel: null,
    ctl01$mainContent$hdnBPlaceID: null,
    ctl01$mainContent$hdnBFacilityID: null,
    ctl01$mainContent$hdnGoback: null,
    ctl01$mainContent$hdnSouth: null,
    ctl01$mainContent$hdnNorth: null,
    ctl01$mainContent$hdnEast: null,
    ctl01$mainContent$hdnWest: null,
    ctl01$mainContent$hdnCenterlat: 37.26237106323242,
    ctl01$mainContent$hdnCenterlong: -122.21236419677734,
    ctl01$mainContent$hdnCenterpointName: 0,
    ctl01$mainContent$hdnCenterpointlat: 0,
    ctl01$mainContent$hdnCenterpointlng: 0,
    ctl01$mainContent$hdnGooglePlaceRefId: 0,
    ctl01$mainContent$hdnGoogleFacilityName: 0,
    ctl01$mainContent$hdnGoolgePlaceImage: 0,
    ctl01$mainContent$hdnCheckParkDataField: 0,
    ctl01$mainContent$hdnInventoryUpdateClick: 0,
    ctl01$mainContent$facilityChanged: null,
    ctl01$mainContent$TopMenuMainSearch$ddlFacilityCategory: 1,
    ctl01$mainContent$TopMenuMainSearch$txtTopArrivalDate: '05/28/2019',
    ctl01$mainContent$TopMenuMainSearch$ddlTopNights: 1,
    ctl01$mainContent$TopMenuMainSearch$ddlSortBy: 3,
    ctl01$mainContent$txtDateRange: '5/28/2019',
    ctl01$mainContent$Grid_ddlNights: 1,
    ctl01$mainContent$ugReservationGrid$hdnSelectedUnits: null,
    ctl01$mainContent$ugReservationGrid$hdnnotavailableunit: null,
    ctl01$mainContent$ugReservationGrid$hdnnotavailableunitAdvanced: null,
    ctl01$mainContent$mapGooglePlaces$hidEventName: null,
    ctl01$mainContent$mapGooglePlaces$hidEventValue: null,
    ctl01$mainContent$LeftMenuAdvanceFilter$hidddlLeft_UnitType: null,
    ctl01$mainContent$LeftMenuAdvanceFilter$hdnLeft_SelectedCategoryName: null,
    ctl01$mainContent$LeftMenuAdvanceFilter$hidddlLeft_Categories: null,
    ctl01$mainContent$LeftMenuAdvanceFilter$Left_indexValue: null,
    ctl01$mainContent$LeftMenuAdvanceFilter$hdnLeft_SelectedUnittypeId: null,
    ctl01$mainContent$LeftMenuAdvanceFilter$hdnLeft_SelectRentalType: 0,
    ctl01$mainContent$LeftMenuAdvanceFilter$homepagefiltersearch: 0,
    ctl01$mainContent$LeftMenuAdvanceFilter$hdnLeft_SelectCampingEquip: 0,
    ctl01$mainContent$LeftMenuAdvanceFilter$hdnLeft_placeid: null,
    ctl01$mainContent$LeftMenuAdvanceFilter$hdnLeft_ParkFinderFromWM: null,
    ctl01$mainContent$LeftMenuAdvanceFilter$ddlLeft_Categories: null,
    ctl01$mainContent$LeftMenuAdvanceFilter$ddlLeft_CampingUnit: 0,
    ctl01$mainContent$LeftMenuAdvanceFilter$ddlLeft_Lenght: 0,
    ctl01$mainContent$LeftMenuAdvanceFilter$hdnPlaceUnitTypeCategory: null,
    ctl01$mainContent$LeftMenuAdvanceFilter$HiddenField1: null
  }
});

const gridOptions = (placeId, facilityId) => ({
  headers: {
    'content-type': 'application/json'
  },
  url:
    'https://www.reservecalifornia.com/CaliforniaWebHome/Facilities/AdvanceSearchm.aspx/GetUnitGridDataHtmlString',
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
    'https://www.reservecalifornia.com/CaliforniaWebHome/Facilities/AdvanceSearchm.aspx/GetNextDateUnitGrid',
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

const run = async ({ campgroundId: { placeId, facilityId }, allDates }) => {
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

module.exports = run;

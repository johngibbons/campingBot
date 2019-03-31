import rp from 'request-promise-native';
import { from } from 'rxjs/observable/from';
import { concatMap, map, reduce } from 'rxjs/operators';

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

const regexp = /UnitDetailPopup(.*?)#39/gi;
const parseAvailable = response =>
  response
    .match(regexp)
    .filter(
      match => match.includes('is_available=true') && !match.includes('valign')
    );

async function searchNextRange(placeId, facilityId) {
  try {
    await request(nextDateOptions);
    const gridResponse = await request(gridOptions(placeId, facilityId));
    return parseAvailable(gridResponse.body.d);
  } catch (e) {
    console.log(e);
    return [];
  }
}

async function run(placeId, facilityId) {
  try {
    await request(sessionOptions);
    await request(searchOptions(placeId, facilityId));
    const allAvailabilities = from(new Array(9)).pipe(
      concatMap(() => from(searchNextRange(placeId, facilityId))),
      reduce((all, curr) => [...all, ...curr], []),
      map(availabilitiesArr =>
        availabilitiesArr.reduce((availabilities, availableSite) => {
          const unit = availableSite.match(/unit_id=(.*?)&/)[1];
          const date = availableSite.match(/arrival_date=(.*?)\s/)[1];
          const dateUnits = availabilities[date];
          if (!dateUnits) {
            // no current availabilites on this date, so add to availabilities obj
            return { ...availabilities, [date]: [unit] };
          } else if (dateUnits.includes(unit)) {
            // duplicate, just return obj
            return availabilities;
          }
          // current availabilities already on this date, add unit to date availabilities array
          return {
            ...availabilities,
            [date]: [...availabilities[date], unit]
          };
        }, {})
      )
    );
    allAvailabilities.subscribe(val => console.log('results', val));
  } catch (e) {
    console.log(e);
  }
}

module.exports = run;

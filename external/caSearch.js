const rp = require("request-promise-native");
const { from } = require("rxjs/observable/from");
const { delay, concatMap, map, reduce, tap } = require("rxjs/operators");
const { formatted } = require("../jobs/datesGenerator");
const updateFinderResults = require("../jobs/updateFinderResults");

const headers = {
  "user-agent":
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.32 Safari/537.36"
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
  url: "https://www.reservecalifornia.com/CaliforniaWebHome/Default.aspx"
};

const searchOptions = (placeId, facilityId) => ({
  url:
    "https://www.reservecalifornia.com/CaliforniaWebHome/Facilities/AdvanceSearch.aspx",
  method: "POST",
  body: {
    ctl01$AdvanceMainSearch$hdnArrivalDate: "03/14/2018",
    ctl01$AdvanceMainSearch$txtArrivalDate: "03/14/2018",
    ctl01$AdvanceMainSearch$hdnNights: 1,
    ctl01$AdvanceMainSearch$ddlNights: 1,
    ctl01$mainContent$hdnUnitTotalDay: 6,
    ctl01$mainContent$btngetFacilitiess: "Hure",
    ctl01$mainContent$hdnCheckListDatalistmode: 1,
    ctl01$mainContent$Hidscreenresolution: 1280,
    ctl01$mainContent$hdnPlaceid: placeId,
    ctl01$mainContent$hdnPlaceFacilirySize: "Medium",
    ctl01$mainContent$hdnFacilityid: facilityId,
    ctl01$mainContent$hdnFacilityType: 1,
    ctl01$mainContent$hdnNodeclick: 0,
    ctl01$mainContent$hiddenPlaceLevel: "Facility",
    ctl01$mainContent$txtDateRange: "11/28/2017",
    ctl01$mainContent$Grid_ddlNights: 1,
    ctl01$mainContent$TopMenuMainSearch$ddlFacilityCategory: 1,
    ctl01$mainContent$TopMenuMainSearch$txtTopArrivalDate: "03/14/2018",
    ctl01$mainContent$TopMenuMainSearch$ddlTopNights: 1,
    ctl01$mainContent$TopMenuMainSearch$ddlSortBy: 3
  }
});

const gridOptions = (placeId, facilityId) => ({
  headers: {
    "content-type": "application/json"
  },
  url:
    "https://www.reservecalifornia.com/CaliforniaWebHome/Facilities/AdvanceSearch.aspx/GetUnitGridDataHtmlString",
  method: "POST",
  body: {
    FacilityId: facilityId,
    PlaceId: placeId,
    MaximumDates: "20",
    IsTablet: true,
    MaximumStayforGrid: 30
  }
});

const nextDateOptions = {
  headers: {
    "content-type": "application/json"
  },
  url:
    "https://www.reservecalifornia.com/CaliforniaWebHome/Facilities/AdvanceSearch.aspx/GetNextDateUnitGrid",
  method: "POST",
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

var regexp = /UnitDetailPopup(.*?)#39/gi;
var parseAvailable = response =>
  response
    .match(regexp)
    .filter(
      match => match.includes("is_available=true") && !match.includes("valign")
    );

const searchNextRange = async function(placeId, facilityId) {
  try {
    const nextDateResponse = await request(nextDateOptions);
    const gridResponse = await request(gridOptions(placeId, facilityId));
    return parseAvailable(gridResponse.body.d);
  } catch (e) {
    console.log(e);
  }
};

const hasAllRequestedDates = (requested, available) =>
  requested.every(requestedDate => available.indexOf(requestedDate) > -1);

const run = async function(campgroundFinder) {
  const placeId = campgroundFinder.campgroundId.placeId;
  const facilityId = campgroundFinder.campgroundId.facilityId;
  const allDates = campgroundFinder.allDates;
  try {
    await request(sessionOptions);
    const searchResponse = await request(searchOptions(placeId, facilityId));
    const findAvailabilities$ = from(new Array(9)).pipe(
      concatMap(() => from(searchNextRange(placeId, facilityId))),
      reduce((all, curr) => [...all, ...curr], []),
      map(availabilitiesArr => {
        const availableDatesByUnit = availabilitiesArr.reduce(
          (availabilities, availableSite) => {
            const unit = availableSite.match(/unit_id\=(.*?)\&/)[1];
            const date = availableSite.match(/arrival_date\=(.*?)\s/)[1];
            const formattedDate = formatted(date);
            const unitDates = availabilities[unit];
            if (!unitDates) {
              // no previous availabilites on this unit, so add to availabilities obj
              return { ...availabilities, [unit]: [formattedDate] };
            } else if (unitDates.includes(formattedDate)) {
              // duplicate, just return obj
              return availabilities;
            } else {
              // previous availabilities already on this unit, add date to unit availabilities array
              return {
                ...availabilities,
                [unit]: [...availabilities[unit], formattedDate]
              };
            }
          },
          {}
        );

        const unitsMatchingDate = allDates
          .map(requestedDatesArr => {
            const matchingUnits = Object.keys(availableDatesByUnit).filter(
              unitId =>
                hasAllRequestedDates(
                  requestedDatesArr,
                  availableDatesByUnit[unitId]
                )
            );

            return {
              date: requestedDatesArr[0],
              siteCount: matchingUnits.length,
              lengthOfStay: requestedDatesArr.length
            };
          })
          .filter(resultObj => resultObj.siteCount !== 0);

        const updatedFinder = {
          ...campgroundFinder,
          results: unitsMatchingDate
        };
        updateFinderResults([updatedFinder]);

        return updatedFinder;
      })
    );
    findAvailabilities$.subscribe(val => console.log("results", val));
  } catch (e) {
    console.log(e);
  }
};

module.exports = run;

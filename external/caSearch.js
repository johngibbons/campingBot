const request = require('request-promise-native')

const headers = {
  'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.32 Safari/537.36'
};

function Connection(placeId, facilityId) {
  const jar = request.jar();
  const req = request.defaults({
    jar,
    resolveWithFullResponse: true,
    time: true,
    timeout: 3000,
    forever: true,
    json: true,
  });

  return {
    getSession() {
      const options = {
        url: 'https://www.reservecalifornia.com/CaliforniaWebHome/Facilities/AdvanceSearch.aspx',
        method: 'POST',
        body: {
          'ctl01$AdvanceMainSearch$hdnArrivalDate': '11/28/2017',
          'ctl01$AdvanceMainSearch$txtArrivalDate': '11/28/2017',
          'ctl01$AdvanceMainSearch$hdnNights': 1,
          'ctl01$AdvanceMainSearch$ddlNights': 1,
          'ctl01$mainContent$hdnUnitTotalDay': 6,
          'ctl01$mainContent$btngetFacilitiess': 'Hure',
          'ctl01$mainContent$hdnCheckListDatalistmode': 1,
          'ctl01$mainContent$Hidscreenresolution': 1280,
          'ctl01$mainContent$hdnPlaceid': placeId,
          'ctl01$mainContent$hdnPlaceFacilirySize': 'Medium',
          'ctl01$mainContent$hdnFacilityid': facilityId,
          'ctl01$mainContent$hdnFacilityType': 1,
          'ctl01$mainContent$hdnNodeclick': 0,
          'ctl01$mainContent$hiddenPlaceLevel': 'Facility',
          'ctl01$mainContent$txtDateRange': '11/28/2017',
          'ctl01$mainContent$Grid_ddlNights': 1,
          'ctl01$mainContent$TopMenuMainSearch$ddlFacilityCategory': 1,
          'ctl01$mainContent$TopMenuMainSearch$txtTopArrivalDate': '11/28/2017',
          'ctl01$mainContent$TopMenuMainSearch$ddlTopNights': 1,
          'ctl01$mainContent$TopMenuMainSearch$ddlSortBy': 3
        }
      };

      return req(options);
    },

    grid() {
      const options = {
        headers: {
          'content-type': 'application/json'
        },
        url: 'https://www.reservecalifornia.com/CaliforniaWebHome/Facilities/AdvanceSearch.aspx/GetUnitGridDataHtmlString',
        method: 'POST',
        body: {
          FacilityId: facilityId,
          PlaceId: placeId,
          MaximumDates: "20",
          IsTablet: true,
          MaximumStayforGrid: 30
        }
      };
      return req(options);
    },

    nextDate() {
      const options = {
        headers: {
          'content-type': 'application/json'
        },
        url: 'https://www.reservecalifornia.com/CaliforniaWebHome/Facilities/AdvanceSearch.aspx/GetNextDateUnitGrid',
        method: 'POST',
        body: {
          unitsizebool: true,
          unitclicsizechangevalue: true
        }
      };
      return req(options);
    }
  }
};

module.exports = Connection;
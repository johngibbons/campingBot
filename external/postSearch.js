const request = require('request-promise-native')

module.exports = (campground, date, lengthOfStay) => {
  const { url, contractCode, facilityId } = campground
  const postOptions = {
    method: 'POST',
    uri: url,
    form: {
      contractCode,
      parkId: facilityId,
      siteTypeFilter: 'ALL',
      submitSiteForm: true,
      search: 'site',
      campingDate: date,
      lengthOfStay,
      contractDefaultMaxWindow: 'MS:24,LT:18,GA:24,SC:13,PA:24,LARC:24,CTLN:13',
      stateDefaultMaxWindow: 'MS:24,GA:24,SC:13,PA:24,CO:24,CA:13'
    }
  }

  return request(postOptions)
}

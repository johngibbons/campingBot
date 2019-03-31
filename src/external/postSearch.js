import request from 'request-promise-native';

export default async ({
  campgroundId: { url, contractCode, facilityId },
  campingDate,
  lengthOfStay
}) => {
  const jar = request.jar();
  const headers = {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    Connection: 'keep-alive'
  };
  const currRequest = request.defaults({
    jar,
    headers,
    followRedirect: true,
    resolveWithFullResponse: true,
    timeout: 5000
  });

  const getOptions = {
    url,
    method: 'GET'
  };

  const postOptions = {
    method: 'POST',
    uri: url,
    form: {
      contractCode,
      parkId: facilityId,
      siteTypeFilter: 'ALL',
      submitSiteForm: true,
      search: 'site',
      lookingFor: 2003,
      campingDate,
      lengthOfStay,
      camping_2003_3012: 4,
      contractDefaultMaxWindow: 'MS:24,LT:18,GA:24,SC:13,PA:24,LARC:24,CTLN:13',
      stateDefaultMaxWindow: 'MS:24,GA:24,SC:13,PA:24,CO:24,CA:13'
    }
  };

  await currRequest(getOptions);
  return currRequest(postOptions);
};

var regexp = /UnitDetailPopup(.*?)#39/gi;
var parseAvailable = response =>
  response
    .match(regexp)
    .filter(match => match.includes('is_available=true'))
    .map(match => {
      var unit = match.match(/unit_id\=(.*?)\&/)[1];
      var day = match.match(/arrival_date\=(.*?)\s/)[1];
      return [unit, day];
    });

module.exports = parseAvailable;

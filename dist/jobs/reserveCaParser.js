"use strict";

var regexp = /UnitDetailPopup(.*?)#39/gi;

var parseAvailable = function parseAvailable(response) {
  return response.match(regexp).filter(function (match) {
    return match.includes('is_available=true');
  }).map(function (match) {
    var unit = match.match(/unit_id\=(.*?)\&/)[1];
    var day = match.match(/arrival_date\=(.*?)\s/)[1];
    return [unit, day];
  });
};

module.exports = parseAvailable;
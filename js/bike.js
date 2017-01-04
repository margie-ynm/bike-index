var apiKey = require('./../.env').apiKey;

function Bike () {

}

Bike.prototype.getStolenCount = function(city) {
  $.get('https://bikeindex.org:443/api/v3/search/count?location=' + city + '&distance=10&stolenness=stolen').then(function(response) {
    $('.showBikes').text("The number of bicycles stolen in " + city + " is " + response.proximity);
  }).fail(function(error) {
    $('.showBikes').text(error.responseJSON.message);
  });
};

exports.bikeModule = Bike;

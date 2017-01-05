var apiKey = require('./../.env').apiKey;
function Bike () {

}

Bike.prototype.getStolenCount = function(city, radius) {
  $.get('https://bikeindex.org:443/api/v3/search/count?location=' + city + '&distance=' + radius + '&stolenness=stolen').then(function(response) {
    $('.showBikes').append("<h4>" + "The number of bicycles stolen in " + city + " within a radius of " + radius + " miles is " + response.proximity + ". " + "</h4>");
  }).fail(function(error) {
    $('.showBikes').text(error.responseJSON.message);
  });
};

Bike.prototype.getStolenNames = function(city) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=' + city  + '&distance=10&stolenness=stolen').then(function(response) {
    console.log(response);
    $('.showBikes').append("<p>" + "The types of bicycles stolen in " + city + " are the following: " + "</p>");
    response.bikes.forEach(function(bike) {
      $('.showBikes').append("<li>" + bike.title + "</li>");
    });
  }).fail(function(error) {
    $('.showBikes').text(error.responseJSON.message);
  });
};

exports.bikeModule = Bike;

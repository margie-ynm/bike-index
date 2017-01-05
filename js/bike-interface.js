var Bike = require('./../js/bike.js').bikeModule;


$(document).ready(function() {
  $('#bike-info').submit(function(event) {
    event.preventDefault();
    var currentBikeObject = new Bike();
    var city = $('#location').val();
    var radius = $('#radius').val();
    var manufacturer = $('#manufacturer').val();
    manufacturer = manufacturer.toLowerCase();
    console.log(manufacturer);
    $('#manufacturer').val("");
    $('#location').val("");
    $('#radius').val("");
    currentBikeObject.getStolenCount(city, radius);
    currentBikeObject.getStolenNames(city);
    currentBikeObject.getAttributes(city, radius, manufacturer);
  });
});

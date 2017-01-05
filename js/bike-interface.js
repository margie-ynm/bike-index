var Bike = require('./../js/bike.js').bikeModule;

$(document).ready(function() {
  var currentBikeObject = new Bike();
  $('#bikeLocation').click(function() {
    var city = $('#location').val();
    var radius = $('#radius').val();
    var manufacturer = $('#manufacturer').val();
    $('#location').val("");
    $('#radius').val("");
    $('#manufacturer').val("");
    currentBikeObject.getStolenCount(city, radius);
    currentBikeObject.getStolenNames(city);
    currentBikeObject.getAttributes(manufacturer);
  });
});

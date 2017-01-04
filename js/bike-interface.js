var Bike = require('./../js/bike.js').bikeModule;

$(document).ready(function() {
  var currentBikeObject = new Bike();
  $('#bikeLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentBikeObject.getStolenCount(city);
    currentBikeObject.getStolenNames(city);
  });
});

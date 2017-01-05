var Bike = require('./../js/bike.js').bikeModule;


$(document).ready(function() {
  function toTitleCase(str)
  {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
  var currentBikeObject = new Bike();
  $('#bikeLocation').click(function() {
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

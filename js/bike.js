var apiKey = require('./../.env').apiKey;
function Bike (city, radius, manufacturer) {
  this.city = city;
  this.radius = radius;
  this.manufacturer = manufacturer;
}

Bike.prototype.getStolenCount = function(city, radius) {
  $.get('https://bikeindex.org:443/api/v3/search/count?location=' + city + '&distance=' + radius + '&stolenness=proximity').then(function(response) {
    $('.showBikes').append("<h4>" + "The number of bicycles stolen in " + city + " within a radius of " + radius + " miles is " + response.proximity + ". " + "</h4>");
  }).fail(function(error) {
    $('.showBikes').text(error.responseJSON.message);
  });
};

Bike.prototype.getStolenNames = function(city) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=' + city  + '&distance=10&stolenness=proximity').then(function(response) {
    console.log(response);
    $('.showBikes').append("<p>" + "The types of bicycles stolen in " + city + " are the following: " + "</p>");
    response.bikes.forEach(function(bike) {
      $('.showBikes').append("<li>" + bike.title + "</li>");
    });
  }).fail(function(error) {
    $('.showBikes').text(error.responseJSON.message);
  });
};

Bike.prototype.getAttributes = function(city, radius, manufacturer) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=' + city + '&distance=' + radius + '&stolenness=proximity').then(function(response) {
    console.log(response);
    var count = 0;
    response.bikes.forEach(function(bike) {
      var mn = bike.manufacturer_name;
      mn = mn.toLowerCase();
      if (mn === manufacturer) {
        count++;
        if (bike.thumb === null) {
          $('.middle-ground').append("<li>" + "<div class='bikegroup'>" + bike.title + "<img src='../../img/placeholder.jpg' class='testing' >" + "</div> </li>" );
        } else {
          $('.middle-ground').append("<li>" + "<div class='bikegroup'>" + bike.title + "<img src='" + bike.thumb + "'> </div> </li>" );
        }
      }
    });
    $('.above-stuff').append("<h3>" + "There are " + count + " bicycles that match your manufacturer:" + "</h3>");
    console.log(count);
  }).fail(function(error) {
    $('.showBikes').text(error.responseJSON.message);
  });
};

exports.bikeModule = Bike;

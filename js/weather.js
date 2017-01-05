var apiKey2 = require('./../.env').apiKey2;


function Weather (){

}

Weather.prototype.getWeather = function(city){
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey2).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
};

exports.weatherModule = Weather;

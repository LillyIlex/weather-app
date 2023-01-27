var datetime = null,
date = null;

var update = function () {
date = moment(new Date())
datetime.html(date.format('dddd, MMMM Do YYYY, h:mm a'));
};
$(document).ready(function () {
datetime = $('#currentDay')
update();
setInterval(update, 1000);
});


var apiKey = "bea3b67283dd3660e8a767a5a906068a"
var limit = 1
var city = "manchester"

geoURL = "http://api.openweathermap.org/geo/1.0/direct?q=%7Bcity=" + city + "&limit=" + limit + "&appid=" + apiKey

//var geoURL = "http://api.openweathermap.org/geo/1.0/direct?q=%7Bcity=London&limit=1&appid=" + apiKey

var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=%7Blat%7D&lon=%7Blon%7D&appid=" + apiKey


$.ajax({
    url: geoURL,
    method: "GET"
}).then(function(response){
    console.log(response)
    var city 
   /* var date = response.
    var temp = response.
    var wind = response.0.list.wind
    var humidity = response.
    var icon = response.0.weather.icon
})


$.ajax({
   url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response)

}) 